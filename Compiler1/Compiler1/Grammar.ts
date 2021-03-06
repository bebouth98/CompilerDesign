export class Grammar {
    terminals: [string , RegExp][] = [];
    constructor(input: string) {
        
        let id: Set<string> = new Set();
        var grams = input.split("\n");
        for (var i = 0; i < grams.length - 1; i++) {
            
            if (grams[i].length == 0) {
                continue;
            }
            else if (!grams[i].includes(" -> ")) {
                throw new Error("no junction ");
            }
            var g = grams[i].split(" -> ");

            if (id.has(g[0])) {
                throw new Error("ID already created.");
            }
            else if (g[0] == "") {
                throw new Error("Empty ID");
            }
            if (id.has(g[1])) {
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
            
            id.add(g[0]);
            
            this.terminals[i] = [g[0], RegExp(g[1])];
        }
        

    }
}