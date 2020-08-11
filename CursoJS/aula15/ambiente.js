let num = [5, 8, 2, 9, 3]

console.log(num.indexOf(7))

console.log(`Nosso vetor é o ${num}`)

num.push(7)

console.log(`Nosso vetor é o ${num}`)

num.sort()

console.log(`Nosso vetor é o ${num}`)

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`${pos}: ${num[pos]}`)
}*/

for (let pos in num) {
    console.log(`${pos}: ${num[pos]}`)
}