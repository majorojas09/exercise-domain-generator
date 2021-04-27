let pronoun = ['the', 'our', 'my', 'this'];
let adj = ['great', 'big', 'incredible', 'boss', 'king'];
let noun = ['jogger', 'racoon', 'hulk', 'captain', 'thor', 'ironman'];
let extension = ['com', 'net', 'us', 'io']

const generateDomain =()=> {
    for (let p = 0; p < pronoun.length; p++){
        for (let a = 0; a < adj.length; a++) {
           for (let n = 0; n < noun.length; n++) {
               for (let e = 0; e < extension.length; e++){
                  console.log(pronoun[p] + adj[a] + noun[n] + '.' + extension[e]) 
               }
           }
        }
    }
}
generateDomain();