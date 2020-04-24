import { Grammar } from "./Grammar";
import { Token } from "./Token";
export class Tokenizer {
    grammar: Grammar;
    inputData: string;
    currentLine: number = 1;
    idx: number = 0;    //index of next unparsed char in inputData
    prevList: Token[] = [];
    current: Token;

    constructor(grammar: Grammar) {
        this.grammar = grammar;
        var addW = true;
        var addC = true;
        for (let i = 0; i < this.grammar.terminals.length; ++i) {
            if (this.grammar.terminals[i][0] == "WHITESPACE") {
                addW =false;
            }
            if (this.grammar.terminals[i][0] == "COMMENT") {
                addC = false;
            }
        }
        if (addW) {
            this.grammar.terminals.push(["WHITESPACE", new RegExp("\\s+")]);
        }
        if (addC) {
            this.grammar.terminals.push(["COMMENT", new RegExp("/\\*(.|\\n)*?\\*/")])
        }
    }
    setInput(inputData: string) {
        this.inputData = inputData;
        this.currentLine = 1;
        this.idx = 0;
    }
    peek() {
        let tmpidx = this.idx;
        let tmpcur = this.current;
        let tmpL = this.prevList;
        let tmpline = this.currentLine;
        let next = this.next();
        this.idx = tmpidx;
        this.current = tmpcur;
        this.prevList = tmpL;
        this.currentLine = tmpline;
        return next;

    }
    next():Token {
        if (this.idx >= this.inputData.length) {
            //special "end of file" metatoken
            return new Token("$", undefined, this.currentLine);
        }

        for (let i = 0; i < this.grammar.terminals.length; ++i) {
            let terminal = this.grammar.terminals[i];
            let sym = terminal[0];
            let rex =new RegExp(terminal[1],"y");     //RegExp
            rex.lastIndex = this.idx;   //tell where to start searching
            let m = rex.exec(this.inputData);   //do the search
            if (m) {
                //m[0] contains matched text as string
                let lexeme = m[0];
                this.idx += lexeme.length;
                let tmpline = this.currentLine;
                this.currentLine += lexeme.split('\n').length - 1;
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    //return new Token using sym, lexeme, and line number
                    this.current = new Token(sym, lexeme, tmpline);
                    this.prevList.push(this.current);
                    if (this.prevList.length > 2) {
                        this.prevList.shift();
                    }
                    return this.current;
                } else {
                    //skip whitespace and get next real token
                    return this.next();
                }
            }
        }
        //no match; syntax error
        throw new Error("No Match");
    }
    previous():Token {
        if (this.prevList.length < 2) {
            return undefined;
        }
        return this.prevList[this.prevList.length-2];
    }
    


}