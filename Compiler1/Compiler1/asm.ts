import {TreeNode} from "./TreeNode"
let asmCode: string[] = [];

enum VarType {
    INTEGER,
    FLOAT
}

function emit(instr: string) {
    asmCode.push(instr);
}
function ICE() {
    throw new Error("Internal Compiler Error!");
}
function programNodeCode(n: TreeNode) {
    //program -> braceblock
    if (n.sym != "program")
        ICE();
    braceblockNodeCode(n.children[0]);
}
function braceblockNodeCode(n: TreeNode) {
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}
function stmtsNodeCode(n: TreeNode) {
    //stmts -> stmt stmts | lambda
    
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}
function stmtNodeCode(n: TreeNode) {
    //stmt -> cond | loop | return-stmt SEMI
    let c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c); break;
        case "loop":
            loopNodeCode(c); break;
        case "returnStmt":
            returnstmtNodeCode(c); break;
        default:
            ICE();
    }
}
function returnstmtNodeCode(n: TreeNode) {
    //return-stmt -> RETURN expr
    let exprType = exprNodeCode(n.children[1]);
    if (exprType == VarType.FLOAT) {
        emit("movq xmm0, [rsp]");
        emit("add rsp, 8");
        emit("cvtsd2si rax, xmm0");
    }
    else {
        emit("pop rax");
        
    }
    emit("ret");
}
function exprNodeCode(n: TreeNode): VarType {
    //expr -> orexpr
    return orexpNodeCode(n.children[0]);
}

function orexpNodeCode(n: TreeNode): VarType {
    //orexp-> orexp OR andexp | andexp
    if (n.children.length === 1) {
        return andexpNodeCode(n.children[0]);
    } 
    else {
        let lbl = label();
        let orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        emit("cmp qword [rsp], 0");
        emit(`jne ${lbl}`);
        emit("add rsp,8");      //discard left result (0)
        let andexpType = andexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;   //always integer, even if float operands
    
        }
}

function andexpNodeCode(n: TreeNode): VarType {
    //andexp -> andexp AND notexp | notexp
    if (n.children.length === 1) {
        return notexpNodeCode(n.children[0]);
    }
    else {
        let lbl = label();
        let andexpType = andexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit("cmp qword [rsp], 0");
        emit(`je ${lbl}`);
        emit("add rsp,8");
        let notexpType = notexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;
    }
    
}

function notexpNodeCode(n: TreeNode): VarType {
    //notexp -> NOT notexp | rel
    if (n.children.length === 1) {
        return relNodeCode(n.children[0]);
    }
    else {
        let lbl = label();
        let lbltwo = label();
        let notexpType = notexpNodeCode(n.children[1]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit("cmp qword [rsp], 0");
        emit(`je ${lbl}`);
        emit("pop rax");
        emit("push 0");
        emit(`jmp ${lbltwo}`);
        emit(`${lbl}:`);
        emit("pop rax");
        emit("push 1")
        emit(`${lbltwo}:`);
        return VarType.INTEGER;
    }
    
}


function sumNodeCode(n: TreeNode): VarType {
    //sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1) {
        return termNodeCode(n.children[0]);
    }
    else{
        let sumType = sumNodeCode(n.children[0]);
        let termType = termNodeCode(n.children[2]);
        console.log(sumType, termType);
        if (sumType !== termType)
            throw new Error("sadface sum");
        let str: string;
        if (sumType == VarType.FLOAT)
        {
            if (n.children[1].sym == "PLUS") {
                str = "addsd";
            }
            else if (n.children[1].sym == "MINUS") {
                str = "subsd";
            }
            emit("movq xmm1, [rsp]");
            emit("add rsp, 8");
            emit("movq xmm0, [rsp]");
            emit("add rsp, 8");
            emit(str + " xmm0, xmm1");
            emit("sub rsp, 8");
            emit("movq [rsp], xmm0");
        }
        else if (sumType == VarType.INTEGER) {
            if (n.children[1].sym == "PLUS") {
                str = "add";
            }
            else if (n.children[1].sym == "MINUS") {
                str = "sub";
            }
            emit("pop rbx");    //second operand
            emit("pop rax");    //first operand
            emit(str + " rax, rbx");
            emit("push rax");
        }
        return sumType;
    }
}

function termNodeCode(n: TreeNode): VarType {
    //term -> term MULOP neg | neg
    if (n.children.length == 1) {
        return negNodeCode(n.children[0]);
    }
    else {
        let termType = termNodeCode(n.children[0]);
        let negType = negNodeCode(n.children[2]);
        if (negType !== termType)
            throw new Error("sadface term");
        if (termType == VarType.INTEGER) {
            emit("pop rbx");
            emit("pop rax");
        }
        else if (termType == VarType.FLOAT) {
            emit("movq xmm1, [rsp]");
            emit("add rsp, 8");
            emit("movq xmm0, [rsp]");
            emit("add rsp, 8");
        }
        switch (n.children[1].token.lexeme) {
            case "*":
                if (termType == VarType.INTEGER) {
                    emit("imul rbx");
                    emit("push rax");
                    return VarType.INTEGER;
                }
                else if (termType == VarType.FLOAT) {
                    emit("mulsd xmm0, xmm1");
                    emit("sub rsp, 8");
                    emit("movq [rsp], xmm0");
                    return VarType.FLOAT;
                }
                
            case "/":
                if (termType == VarType.INTEGER) {
                    emit("mov qword rdx, 0");
                    emit("idiv rbx");
                    emit("push rax");
                    return VarType.INTEGER;
                }
                else if (termType == VarType.FLOAT) {
                    emit("divsd xmm0, xmm1");
                    emit("sub rsp, 8");
                    emit("movq [rsp], xmm0");
                    return VarType.FLOAT;
                }
               
            case "%":
                if (termType == VarType.INTEGER) {
                    emit("mov qword rdx, 0");
                    emit("idiv rbx");
                    emit("push rdx")
                    return VarType.INTEGER;
                }
                
        }
        
        throw new Error("here");

    }
}

function negNodeCode(n: TreeNode): VarType {
    // neg -> MINUS neg | factor
    if (n.children.length == 1) {
        return factorNodeCode(n.children[0]);
    }
    else {
        let negType = negNodeCode(n.children[1]);
        if (negType == VarType.INTEGER) {
            emit("pop rbx");
            emit("mov qword rax, 0");
            emit("sub rax, rbx");
            emit("push rax")
            return VarType.INTEGER;
        }
        else if (negType == VarType.FLOAT) {
            emit("movq xmm1, [rsp]");
            emit("xorps xmm0, xmm0");
            emit("subsd xmm0, xmm1");
            emit("movq [rsp], xmm0");
            return VarType.FLOAT;
        }
    }
}
function factorNodeCode(n: TreeNode): VarType {
    //factor -> NUM | LP expr RP
    
    let child = n.children[0];
    switch (child.sym) {
        case "NUM":
            let v = parseInt(child.token.lexeme, 10);
            emit(`push qword ${v}`)
            return VarType.INTEGER;
        case "LP":
            if (n.children.length == 3) {
                return exprNodeCode(n.children[1]);
            }
            else if (n.children.length == 4) {
                let bumy = n.children[1].token.lexeme;
                let factorType = factorNodeCode(n.children[3]);
                if (bumy == "int" && factorType == VarType.FLOAT) {
                    emit(" movq xmm0, [rsp]");
                    emit("add rsp, 8");
                    emit("roundsd xmm0, xmm0, 0xb");
                    emit("cvtsd2si rax, xmm0");
                    emit("push rax");
                    return VarType.INTEGER;
                }
                else if (bumy == "double" && factorType == VarType.INTEGER) {
                    emit("pop rax");
                    emit("cvtsi2sd xmm0, rax");
                    emit("sub rsp, 8");
                    emit("movq [rsp], xmm0");
                    return VarType.FLOAT;
                }
                else {
                    return factorType;
                }
            }
        case "FPNUM":
            let flo = parseFloat(child.token.lexeme).toString();
            if (!flo.includes(".")) {
                flo += ".0";
            }
            emit(`mov rax, __float64__(${flo})`);
            emit("push rax");
            return VarType.FLOAT;

        default:
            ICE();
    }
}
function relNodeCode(n: TreeNode): VarType {
    //rel |rarr| sum RELOP sum | sum
    if (n.children.length === 1)
        return sumNodeCode(n.children[0]);
    else {
        let sum1Type = sumNodeCode(n.children[0]);
        let sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== sum2Type)
            throw new Error("sadface rel ");
        emit("pop rax");    
        emit("cmp [rsp],rax");    
        switch (n.children[1].token.lexeme) {
            case ">=": emit("setge al"); break;
            case "<=": emit("setle al"); break;
            case ">": emit("setg  al"); break;
            case "<": emit("setl  al"); break;
            case "==": emit("sete  al"); break;
            case "!=": emit("setne al"); break;
            default: ICE()
        }
        emit("movzx qword rax, al");   
        emit("mov [rsp], rax");
        return VarType.INTEGER;
        
    }
}
function convertStackTopToZeroOrOneInteger(type: VarType) {
    if (type == VarType.INTEGER) {
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    }
    else if(type == VarType.FLOAT) {
        emit("xorpd xmm1, xmm1");
        emit("movq xmm0, [rsp]");
        emit("cmpneqsd xmm0, xmm1");
        emit("movq [rsp], xmm0");
        emit("and qword [rsp], 1");
    }
}

let labelCounter = 0;
function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function condNodeCode(n: TreeNode) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock

    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]);
        emit("pop rax")//leaves result in rax
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
    } else {
        exprNodeCode(n.children[2]);
        emit("pop rax");
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        var endelseLabel = label();
        emit(`jmp ${endelseLabel}`);
        emit(`${endifLabel}:`)
        braceblockNodeCode(n.children[6]);
        emit(`${endelseLabel}:`)

    }
}
function loopNodeCode(n: TreeNode) {
    //loop -> WHILE LP expr RP braceblock
    var startLabel = label();
    var endLabel = label();
    emit(`${startLabel}:`)
    exprNodeCode(n.children[2]);
    emit("pop rax");
    emit("cmp rax, 0");
    emit(`je ${endLabel}`);
    braceblockNodeCode(n.children[4]);
    emit(`jmp ${startLabel}`);
    emit(`${endLabel}:`);
}
export function makeAsm(root: TreeNode) {
    asmCode = [];
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    return asmCode.join("\n");
}