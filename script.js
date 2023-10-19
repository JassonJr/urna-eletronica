function urnaEletronica() {
    let voto = 0, votosCandidato1 = 0, votosCandidato2 = 0, votosCandidato3 = 0, votosBrancos = 0, votosNulos = 0, totalVotos = 0, nomeGanhador, votosGanhador = 0, ganhador = true, encerrarVotacao = false; 
    console.log('Iniciando o programa')
    console.clear()

    console.log('** CONFIGURAÇÃO DA URNA **')
    let senhaMesario = parseInt(prompt('Configure a senha do mesário: '))
    do {
        let nomeCandidato1 = prompt('Digite o nome do primeiro candidato')
        let nomeCandidato2 = prompt('Digite o nome do segundo candidato')
        let nomeCandidato3 = prompt('Digite o nome do terceiro candidato')

        console.log('** NOMES DOS CANDIDATOS **')
        console.log('Candidato 1: '+ nomeCandidato1)
        console.log('Candidato 2: '+ nomeCandidato2)
        console.log('Candidato 3: '+ nomeCandidato3)
 
    } while (!confirm('Se o nomes dos candidatos estão corretos, clique em OK para continuar ou CANCELAR para voltar e digitar novamente.'))

    do {
        console.clear()
        
        console.log('Opções de voto:')
        console.log('(1) Candidato 1: '+ nomeCandidato1)
        console.log('(2) Candidato 2: '+ nomeCandidato2)
        console.log('(3) Candidato 3: '+ nomeCandidato3)
        console.log('(5) Branco')
        console.log('(8) Nulo')
        voto = parseInt(prompt('Digite sua opção de voto'))
        totalVotos++
        if (voto == 1) {
            votosCandidato1++
        } else if (voto == 2) {
            votosCandidato2++
        } else if (voto == 3) {
            votosCandidato3++
        } else if (voto == 5) {
            votosBrancos++
        } else if (voto === senhaMesario) {
            encerrarVotacao = confirm('Deseja encerrar a votação?')
            if(encerrarVotacao) {
                totalVotos--
            }
        } else {
            if(confirm('Voto nulo selecionado, deseja contiuar?')) votosNulos++
            else totalVotos--
        }
    } while(encerrarVotacao !== true)
    
    //
    if (totalVotos > 0) {
        console.clear()
        //saida para o usuario: boletim de urna
        console.log('**BOLETIM DE URNA**')
        console.log('Total de votos: ' + totalVotos)
        console.log('Total de votos do candidato 1: ' + votosCandidato1 + ' votos ('+(votosCandidato1 / totalVotos * 100).toFixed(1)+'%)')
        console.log('Total de votos do candidato 2: ' + votosCandidato2 + ' votos ('+(votosCandidato2 / totalVotos * 100).toFixed(1)+'%)')
        console.log('Total de votos do candidato 3: ' + votosCandidato3 + ' votos ('+(votosCandidato3 / totalVotos * 100).toFixed(1)+'%)')
        console.log('Total de votos Brancos: ' + votosBrancos + ' votos ('+(votosBrancos / totalVotos * 100).toFixed(1)+'%)')
        console.log('Total de votos Nulos: ' + votosNulos + ' votos ('+(votosNulos / totalVotos * 100).toFixed(1)+'%)')
        
        //determina ganhador
        if ( votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
            nomeGanhador = nomeCandidato1
            votosGanhador = votosCandidato1 + votosBrancos
        } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
            nomeGanhador = nomeCandidato2
            votosGanhador = votosCandidato2 + votosBrancos
        } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
            nomeGanhador = nomeCandidato363,
            votosGanhador = votosCandidato3 + votosBrancos
        } else {
            //situação de empate
            ganhador = false
        }
        
        //exibição do ganhador
        if (ganhador) {
            console.log('O ganhador desta urna foi ' + nomeGanhador + ' com ' + votosGanhador + ' votos (' + (votosGanhador/totalVotos*100).toFixed(1) + '%)')
            return
        } else {
            console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos)')
            return
        }
    } else {
        console.clear()
        console.log('Total de votos: ' + totalVotos)
        console.log('Não houve votação nesta urna')
        return
    }

}