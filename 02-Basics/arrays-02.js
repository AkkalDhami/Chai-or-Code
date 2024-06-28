const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//* => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[2]); //* => spiderman
// console.log(marvel_heros);

// delete marvel_heros[1] //* => [ 'thor', <1 empty item>, 'spiderman' ]
// console.log(marvel_heros.reverse());//* reverse the elemments; [ 'spiderman', 'ironman', 'thor' ]
// console.log(marvel_heros.sort()) //* =>[ 'ironman', 'spiderman', 'thor' ] Sort an array in ascending order

let mdv = marvel_heros.concat(dc_heros)
// console.log(mdv); //* => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const allhero = [...marvel_heros, ...dc_heros] 
// console.log(allhero) //* => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherarr = [1, 2, 3, [4, 5, ,6] ,7, [6, 7,[4, 5]]]
let real_arr = anotherarr.flat() //* => [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(real_arr); 

// console.log(Array.isArray("akkal")) //* => false
// console.log(Array.from("akkal")) //* => [ 'a', 'k', 'k', 'a', 'l' ]
// console.log(Array.from({name:"akkal"})) //* => returns: []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)) //* => [ 100, 200, 300 ]