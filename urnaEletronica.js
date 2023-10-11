function urnaEletronica() {
    
    let opcao, totalVotos = 0, candidato1 = 0, candidato2 = 0, candidato3 = 0, votosBranco = 0, votosNulo = 0, porcentagemVotosC1

    // do {
    //     //opcao = parseInt(prompt('Digite a opção:'))

    //     console.log("Opção 1 selecionada")
    //     contador++ 
    // } while (opcao === 1)
    console.log(document.getElementsByClassName('num'))
    document.getElementById('teclado').addEventListener('click', event => {
        console.log(event.target.innerText)
        if (event.target.type === 'button') {
            if (event.target.innerText == 1) {
                candidato1++
                totalVotos++
            } else if (event.target.innerText == 2) {
                candidato2++
                totalVotos++
            } else if (event.target.innerText == 3) {
                candidato3++
                totalVotos++
            } else if (event.target.innerText == "Branco") {
                votosBranco++
                totalVotos++
            } else if (event.target.innerText == 0) {
                votosNulo++
            } else if (event.target.innerText == "Confirma") {
                if (candidato1 > candidato2 &&
                candidato1 > candidato3    
                ) {
                    console.log('Candidato 1 é o vencedor')
                } else if (candidato2 > candidato1 &&
                    candidato2 > candidato3    
                ) {
                        console.log('Candidato 2 é o vencedor')
                } else if (candidato3 > candidato2 &&
                    candidato3 > candidato1    
                ) {
                        console.log('Candidato 3 é o vencedor')
                }
            }
        }
    })
}

urnaEletronica()