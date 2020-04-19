"use strict";
exports.__esModule = true;
var Token = /** @class */ (function () {
    function Token(sym, line, lexeme) {
        this.sym = sym;
        this.lexeme = lexeme;
        this.line = line;
    }
    Token.prototype.toString = function () {
        var sym = this.sym.padStart(20, ' ');
        var line = "" + this.line;
        line = line.padEnd(4, ' ');
        return "[" + sym + " " + line + " " + this.lexeme + "]";
    };
    return Token;
}());
exports.Token = Token;
