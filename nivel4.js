let fila = ["Dona clara (idosa) ","marcos","Juliana","Roberta"]
   fila.shift()
function fnchamarProximo(fila){
     console.log("Proximo: " + fila[0])
    console.log("Ainda aguardando: " + fila[1] )
}

fnchamarProximo(fila)