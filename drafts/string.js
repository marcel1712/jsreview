//this file is just a draft to remember some properties of the language
const string = "hello"

console.log(string.charAt(3));
console.log(string.charAt(1));
console.log(string.charCodeAt(3));
console.log(string.indexOf('o'));

console.log(string.substring(0));//hello
console.log(string.substring(1));//ello
console.log(string.substring(2));//llo
console.log(string.substring(3));//lo

console.log('Ola '.concat(string).concat("!"));
console.log(string.replace(1, '!'));

console.log('Marcel, Aska, Cibele'.split(','));//Convert a string to an array using the comma as a separator.


//Concatenate strings
const nome = 'Marcel'
const concatenate = 'Ola ' + nome + '!'
const template = `
    ola
    ${nome}!
`
console.log(concatenate, template);

const uper = text => text.toUpperCase();
console.log(`Hey, ${uper('be carefull')}`);