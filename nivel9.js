let basePreco = [15.00,25.00,40.00]

function fnAtualizarPreco(lista,indice,novoValor){
    // length conta o total de valores -> 3
    if((lista.length - 1) < indice){
     console.log('produto não encontrado!')
    return
    
    }
    lista[indice] = novoValor 
    console.log('Novos valores de preço ${lista}')
}
fnAtualizarPreco(basePreco,1,28.50)
fnAtualizarPreco(basePreco,2,43.49)