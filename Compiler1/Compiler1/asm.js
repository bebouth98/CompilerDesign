"use strict";
exports.__esModule = true;
var asmCode = [];
function emit(instr) {
    asmCode.push(instr);
}
function ICE() {
    throw new Error("Internal Compiler Error!");
}
function programNodeCode(n) {
    //program -> braceblock
    if (n.sym != "program")
        ICE();
    braceblockNodeCode(n.children[0]);
}
function braceblockNodeCode(n) {
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}
function stmtsNodeCode(n) {
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}
function stmtNodeCode(n) {
    //stmt -> cond | loop | return-stmt SEMI
    var c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c);
            break;
        case "returnStmt":
            returnstmtNodeCode(c);
            break;
        default:
            ICE();
    }
}
function returnstmtNodeCode(n) {
    //return-stmt -> RETURN expr
    exprNodeCode(n.children[1]);
    emit("ret");
}
function exprNodeCode(n) {
    //expr -> NUM
    var d = parseInt(n.children[0].token.lexeme, 10);
    emit("mov rax, " + d);
}
var labelCounter = 0;
function label() {
    var s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function condNodeCode(n) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("cmp rax, 0");
        var endifLabel = label();
        emit("je " + endifLabel);
        braceblockNodeCode(n.children[4]);
        emit(endifLabel + ":");
    }
    else {
        exprNodeCode(n.children[2]);
        emit("cmp rax, 0");
        var endifLabel = label();
        emit("je " + endifLabel);
        braceblockNodeCode(n.children[4]);
        var endelseLabel = label();
        emit("jmp " + endelseLabel);
        emit(endifLabel + ":");
        braceblockNodeCode(n.children[6]);
        emit(endelseLabel + ":");
    }
}
function loopNodeCode(n) {
    //loop -> WHILE LP expr RP braceblock
    var startLabel = label();
    var endLabel = label();
    emit(startLabel + ":");
    exprNodeCode(n.children[2]);
    emit("cmp rax, 0");
    emit("je " + endLabel);
    braceblockNodeCode(n.children[4]);
    emit("jmp " + startLabel);
    emit(endLabel + ":");
}
function makeAsm(root) {
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
exports.makeAsm = makeAsm;
