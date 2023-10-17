//declaração de variaveis globais
let opcao, totalVotos = 0, candidato1 = 0, candidato2 = 0, candidato3 = 0, votosBranco = 0, votosNulo = 0, porcentagemVotosC1 = 0, porcentagemVotosC2 = 0, porcentagemVotosC3 = 0, porcentagemVotosBranco = 0, porcentagemVotosNulo = 0, nomeCandidato1, nomeCandidato2, nomeCandidato3;

function urnaEletronica() {
    let votacao = true
    totalVotos = 0, candidato1 = 0, candidato2 = 0, candidato3 = 0, votosBranco = 0, votosNulo = 0, porcentagemVotosC1 = 0, porcentagemVotosC2 = 0, porcentagemVotosC3 = 0, porcentagemVotosBranco = 0, porcentagemVotosNulo = 0;

    //solicita o nome dos candidatos ao usuário
    nomeCandidato1 = prompt("Digite o nome do candidato 1:")
    console.log(nomeCandidato1)
    nomeCandidato2 = prompt("Digite o nome do candidato 2:")
    console.log(nomeCandidato2)
    nomeCandidato3 = prompt("Digite o nome do candidato 3:")
    console.log(nomeCandidato3)

    //console.log(document.getElementsByClassName('num'))
    document.getElementById('teclado').addEventListener('click', event => {
        if (event.target.type === 'button') {
            //adiciona votos ao candidato de acordo com o número pressionado
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
                calculaVotos()
            }
            //console.log(event.target.innerText)
        }
    })
}

function calculaVotos() {
    //exibe o candidato vencedor
    if (candidato1 > candidato2 &&
        candidato1 > candidato3    
        ) {
            console.log(nomeCandidato1+' é o vencedor')
        } else if (candidato2 > candidato1 &&
            candidato2 > candidato3    
        ) {
                console.log(nomeCandidato2+' é o vencedor')
        } else if (candidato3 > candidato2 &&
            candidato3 > candidato1    
        ) {
                console.log(nomeCandidato3+' é o vencedor')
        }

    //calcula porcentagem de votos
    porcentagemVotosC1 = (candidato1/totalVotos) * 100    
    porcentagemVotosC2 = (candidato2/totalVotos) * 100    
    porcentagemVotosC3 = (candidato3/totalVotos) * 100    
    porcentagemVotosBranco = (votosBranco/totalVotos) * 100    
    porcentagemVotosNulo = (votosNulo/totalVotos) * 100
    console.log("Candidato 1 recebeu:"+porcentagemVotosC1.toFixed(1)+"% de votos")    
    console.log("Candidato 2 recebeu:"+porcentagemVotosC2.toFixed(1)+"% de votos")    
    console.log("Candidato 3 recebeu:"+porcentagemVotosC3.toFixed(1)+"% de votos")    
    console.log("Votos Brancos:"+porcentagemVotosBranco.toFixed(1)+"%")    
    console.log("Votos Nulos:"+porcentagemVotosNulo.toFixed(1)+"%")    
    return    
}