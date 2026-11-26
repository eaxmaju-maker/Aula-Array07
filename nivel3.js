let fila = ["Marcos", "Juliana", "Roberto"]

function fnEncaixePrioridade(fila,nomePaciente){
  
    fila.unshift(nomePaciente)
    console.log(fila)
}
fnEncaixePrioridade(fila,"Dona Clara Idosa")