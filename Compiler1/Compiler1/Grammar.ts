import { NodeType } from "./NodeType";
export class Grammar {
    terminals: [string, RegExp][] = [];
    nonterminals: [string, string][] = [];
    constructor(input: string) {
        
        let ID: Set<string> = new Set();
        let grams = input.split("\n\n");
        let terms = grams[0].split("\n");
        let nonterms = grams[1].split("\n");
        for (let i = 0; i < terms.length; i++) {
            
            if (terms[i].length == 0) {
                continue;
            }
            else if (!terms[i].includes(" -> ")) {
                throw new Error("no junction ");
            }
            var g = terms[i].split(" -> ");
            if(ID.has(g[0])) {
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
            catch {
                throw new Error("Invalid Regex");
            }
            if (!ID.has(g[0])) {

                ID.add(g[0]);
            }
            
            this.terminals[i] = [g[0], RegExp(g[1])];
        }
        for (var i = 0; i < nonterms.length - 1; i++) {
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
            

            const found: number = this.nonterminals.findIndex(e => e[0] === g[0])
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
        let used: Set<string> = new Set();
        let first: NodeType = new NodeType("expr");

        this.dfs(first, used);
        console.log(ID);
        console.log(used);
        if (ID !== undefined) {
            ID.forEach(def => {
                if (!used.has(def)) {
                    throw new Error(def + "Not used within grammar.")
                }
            });
        } 
        
        if (used !== undefined) {
            used.forEach(u => {
                if (u !== '' && !ID.has(u)) {
                    throw new Error(u + ":Not defined")
                }
            });
        }
        
        
        
        

        let foo: Set<string> = new Set();

    }
    dfs(N: NodeType, v: Set<string>) {
        v.add(N.label);
        
        const found = this.nonterminals.find((e: String[]) => e[0] === N.label);
        if (found !== undefined) {
            let item = found[1];
            item = item.replace('|', '');
            item = item.replace(',', ' ');
            item.split(new RegExp('\\b')).forEach((t: string) => {
                let tmp = t.trim();
                if (tmp !== '') {
                    let new_node: NodeType = new NodeType(tmp);
                    N.n.push(new_node);
                }
            });
        }
        if (N.n !== undefined) {
            N.n.forEach((t: NodeType) => {
                if (!v.has(t.label)) {
                    this.dfs(t, v);
                }
            })
        }
    }
}