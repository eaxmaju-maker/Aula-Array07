let corredores = ["Arroz","Feijão","cafe","Açucar","Sal"]

    function fnconsultarCorredor(lista,item){
        if (lista.includes(item) == true) {
            let posiçãoItem = lista.indexOf(item) + 1
            console.log('O ${item} esta no corredor ${posicaoItem}')
        } else {
            console.log('Produto ${item} não foi encontrado!')
        }
}

fnconsultarCorredor(corredores,"Macarrão")
fnconsultarCorredor(corredores,"cafe")