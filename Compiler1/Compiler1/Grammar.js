"use strict";
exports.__esModule = true;
var NodeType_1 = require("./NodeType");
var Grammar = /** @class */ (function () {
    function Grammar(input) {
        this.terminals = [];
        this.nonterminals = [];
        this.nullable = new Set();
        var ID = new Set();
        var grams = input.split("\n");
        var terms = [];
        var nonterms = [];
        var isterm = true;
        grams.forEach(function (e) {
            if (e.length != 0) {
                if (isterm) {
                    terms.push(e);
                }
                else {
                    nonterms.push(e);
                }
            }
            else {
                isterm = false;
            }
        });
        for (var i_1 = 0; i_1 < terms.length; i_1++) {
            if (terms[i_1].length == 0) {
                continue;
            }
            else if (!terms[i_1].includes(" -> ")) {
                throw new Error("no junction ");
            }
            var g = terms[i_1].split(" -> ");
            if (ID.has(g[0])) {
                throw new Error("ID already created.");
            }
            else if (g[0] == "") {
                throw new Error("Empty ID");
            }
            if (ID.has(g[1])) {
                throw new Error("Regex already created.");
            }
            else if (g[1] == "") {
                throw new Error("Empty Regex");
            }
            try {
                new RegExp(g[1]);
            }
            catch (_a) {
                throw new Error("Invalid Regex");
            }
            if (!ID.has(g[0])) {
                ID.add(g[0]);
            }
            this.terminals[i_1] = [g[0], RegExp(g[1])];
        }
        for (var i = 0; i < nonterms.length; i++) {
            if (nonterms[i].length == 0) {
                continue;
            }
            else if (!nonterms[i].includes(" -> ")) {
                throw new Error("no junction ");
            }
            var g = nonterms[i].split(" -> ");
            if (g[0] == "") {
                throw new Error("Empty ID");
            }
            else if (g[1] == "") {
                throw new Error("Empty nonterminal");
            }
            var found = this.nonterminals.findIndex(function (e) { return e[0] === g[0]; });
            if (found !== -1) {
                var nonterm = this.nonterminals[found];
                this.nonterminals[found][1] = nonterm + ' | ' + g[1];
            }
            else {
                if (!ID.has(g[0])) {
                    ID.add(g[0]);
                }
            }
            this.nonterminals[i] = [g[0], g[1]];
        }
        var used = new Set();
        var first = new NodeType_1.NodeType("expr");
        this.dfs(first, used);
        if (ID !== undefined) {
            ID.forEach(function (def) {
                if (!used.has(def)) {
                    //throw new Error(def + "Not used within grammar.")
                }
            });
        }
        if (used !== undefined) {
            used.forEach(function (u) {
                if (u !== '' && !ID.has(u)) {
                    //throw new Error(u + ":Not defined")
                }
            });
        }
        var foo = new Set();
    }
    Grammar.prototype.getNullable = function () {
        var _this = this;
        var stabe = true;
        console.log(this.nonterminals);
        while (true) {
            stabe = true;
            this.nonterminals.forEach(function (e) {
                if (!_this.nullable.has(e[0])) {
                    var products = e[1].split("|");
                    console.log(products);
                    products.forEach(function (p) {
                        var symbols = p.trim().split(" ");
                        if (symbols.every(function (symb) { return _this.nullable.has(symb) || symb == "lambda"; })) {
                            _this.nullable.add(e[0]);
                            stabe = false;
                        }
                    });
                }
            });
            if (stabe) {
                break;
            }
        }
        return this.nullable;
    };
    Grammar.prototype.dfs = function (N, v) {
        var _this = this;
        v.add(N.label);
        var found = this.nonterminals.find(function (e) { return e[0] === N.label; });
        if (found !== undefined) {
            var item = found[1];
            item = item.replace('|', '');
            item = item.replace(',', ' ');
            item.split(new RegExp('\\b')).forEach(function (t) {
                var tmp = t.trim();
                if (tmp !== '') {
                    var new_node = new NodeType_1.NodeType(tmp);
                    N.n.push(new_node);
                }
            });
        }
        if (N.n !== undefined) {
            N.n.forEach(function (t) {
                if (!v.has(t.label)) {
                    _this.dfs(t, v);
                }
            });
        }
    };
    return Grammar;
}());
exports.Grammar = Grammar;
