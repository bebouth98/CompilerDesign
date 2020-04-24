"use strict";
exports.__esModule = true;
var TreeNode_1 = require("./TreeNode");
var Tokenizer_1 = require("./Tokenizer");
var Grammar_1 = require("./Grammar");
var operandStack = [];
var operatorStack = [];
var g = 'POWOP -> [*][*]\n' +
    'MULOP -> [*/]\n' +
    'BITNOT -> [~]\n' +
    'ADDOP -> [-+]\n' +
    'ASSIGNOP -> =(?!=)\n' +
    'NUM -> -?\\d+\n' +
    'SEMI -> [;]\n' +
    'IF -> \\bif\\b\n' +
    'ELSE -> \\belse\\b\n' +
    'LP -> [(]\n' +
    'RP -> [)]\n' +
    'COMMA -> [,]\n' +
    'ID -> [A-Za-z_]\\w*\n\n' +
    'S -> stmt\n' +
    'stmt -> cond | sum assign SEMI\n' +
    'cond -> IF LP expr RP stmt | IF LP expr RP stmt ELSE stmt\n' +
    'assign -> ID ASSIGNOP expr\n' +
    'sum -> sum ADDOP product | product\n' +
    'product -> product MULOP pow | pow\n' +
    'pow -> factor POWOP pow | factor\n' +
    'expr -> expr ADDOP term | term\n' +
    'term -> term MULOP factor | factor\n' +
    'factor -> LP expr RP | NUM\n';
var operators = {
    "POWOP": 4,
    "BITNOT": 3,
    "NEGATE": 3,
    "MULOP": 2,
    "ADDOP": 1,
    "COMMA": 0,
    "func-call": 5
};
var arity = {
    "POWOP": 2,
    "MULOP": 2,
    "ADDOP": 2,
    "RP": 2,
    "LP": 2,
    "NEGATE": 1,
    "func-call": 2,
    "COMMA": 2
};
var assoc = {
    "NEGATE": "right",
    "POWOP": "right",
    "MULOP": "left",
    "ADDOP": "left",
    "func-call": "left",
    "COMMA": "left"
};
function doOperation() {
    var c1 = operandStack.pop();
    var opNode = operatorStack.pop();
    if (arity[opNode.sym] == 2) {
        var c2 = operandStack.pop();
        opNode.children.push(c2);
    }
    else if (opNode.sym == "func-call") {
        arity["func-call"] = 2;
    }
    opNode.children.push(c1);
    operandStack.push(opNode);
}
var gram = new Grammar_1.Grammar(g);
function parse(s) {
    operandStack = [];
    operatorStack = [];
    var tokenizer = new Tokenizer_1.Tokenizer(gram);
    tokenizer.setInput(s);
    while (true) {
        var t = tokenizer.next();
        var sym = t.sym;
        if (sym == "$") {
            break;
        }
        if (t.lexeme == "-") {
            var p = tokenizer.previous();
            console.log(p);
            if (p == undefined || p.sym == "LP" || operators[p.sym] != undefined) {
                sym = "NEGATE";
            }
        }
        if (sym == "LP") {
            var pt = tokenizer.previous();
            if (pt != undefined && pt.sym == "ID") {
                var puke = tokenizer.peek();
                if (puke != undefined && puke.sym == "RP") {
                    arity["func-call"] = 1;
                    operatorStack.push(new TreeNode_1.TreeNode("func-call", undefined));
                    tokenizer.next();
                    doOperation();
                    continue;
                }
                arity["func-call"] = 2;
                operatorStack.push(new TreeNode_1.TreeNode("func-call", undefined));
            }
            operatorStack.push(new TreeNode_1.TreeNode(sym, t));
        }
        else if (arity[sym] == 1 && assoc[sym] == "right") {
            operatorStack.push(new TreeNode_1.TreeNode(sym, t));
        }
        else if (sym == "NUM" || sym == "ID") {
            operandStack.push(new TreeNode_1.TreeNode(sym, t));
        }
        else if (sym == "RP") {
            while (true) {
                var last = operatorStack[operatorStack.length - 1];
                if (last != undefined && last.sym == "LP") {
                    operatorStack.pop();
                    break;
                }
                else if (last == undefined) {
                    break;
                }
                else {
                    doOperation();
                }
            }
        }
        else {
            var ass = assoc[sym];
            while (true) {
                if (operatorStack.length == 0) {
                    break;
                }
                var A = operatorStack[operatorStack.length - 1].sym;
                if (ass == "left" && operators[A] >= operators[sym]) {
                    doOperation();
                }
                else if (ass == "right" && operators[A] > operators[sym]) {
                    doOperation();
                }
                else {
                    break;
                }
            }
            operatorStack.push(new TreeNode_1.TreeNode(sym, t));
        }
    }
    while (true) {
        if (operatorStack.length == 0) {
            break;
        }
        doOperation();
    }
    return operandStack[0];
}
exports.parse = parse;
