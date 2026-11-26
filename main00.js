// [] -> significa um array
// os valores são separados por(,)
//             0      1       2       3        4
let nomes = ["Isa","victor","pedro","samuel","Geovana"]
console.log(nomes)
console.log(nomes[0])//consulta a posição(obs. a contagem de array começa em 0 )
 
// troca de posição
nomes[4] = "Caleb"
 
console.log(nomes)
 
console.log(nomes)
console.log(nomes.length) // conta quantas informações eu tenho no meu array
 
nomes[nomes.length]= "Geovana"
 
console.log(nomes)
 
//nomes[nomes.length]= "Nicolas"
 
nomes.push("Nicolas") // push adiciona mais um valor ao FINAL do array
console.log(nomes)
 
nomes.unshift("Ro")
console.log(nomes)
 
 
//remover valores
// .pop -> ele sempre vai remover o ultimo valor
// .shift -> remove o primeiro valor
let ultimoNome = nomes.pop()
console.log(nomes)
console.log(ultimoNome)
 
let primeiroNome = nomes.shift()
console.log(nomes)
console.log(primeiroNome)
 
 
 
 
 
//e se eu precisar validar que uma informação existe em um array
console.log(nomes.includes("Nicolas"))
// usado para validar se a informação esta ali
 
// e se eu precisar saber em que posição (indice) essa informação esta certa
console.log(nomes.indexOf("Nicolas"))
// se eu quero saber onde esta o indice
 
// se eu precisar percorrer todo o array
nomes.forEach((linha)=>{
    console.log("o nome resgitrado é :" + linha)
})
 
 
nomes.forEach((linha, contador)=>{
    console.log("O" + ( contador + 1) + "o nome resgitrado é :" + linha)
})