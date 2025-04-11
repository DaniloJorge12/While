let moeda = 3
let total = 0
let quantidade = 0

while (total < 12) {
    quantidade++
    total += moeda
    console.log(`Passo ${quantidade}: Total = ${total} reais`)
}

console.log(`\nTotal final: ${total} reais com ${quantidade} moedas.`)