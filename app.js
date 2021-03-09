let pronoun = ['the', 'our', 'my', 'this'];
let adj = ['great', 'big', 'incredible', 'boss', 'king'];
let noun = ['jogger', 'racoon', 'hulk', 'captain', 'thor', 'ironman'];
let extension = ['com', 'net', 'us', 'io']

function generateDomain() {
    let mixP = Math.floor(Math.random * pronoun.length);
    let mixA = Math.floor(Math.random * adj.length);
    let mixN = Math.floor(Math.random * noun.length);
    let mixE = Math.floor(Math.random * extension.length);

    var random_url = pronoun[mixP] + adj[mixA] + noun[mixN] + extension[mixE] + "." + extension[mixE];

    return random_url;
}

console.log(generateDomain());