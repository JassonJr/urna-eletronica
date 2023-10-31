let voto = 0, votosCandidato1 = 0, votosCandidato2 = 0, votosCandidato3 = 0, votosBrancos = 0, votosNulos = 0, totalVotos = 0, nomeGanhador, votosGanhador = 0, ganhador = true, encerrarVotacao = false, confirmaVoto = false;

let nomeCandidato1;
let nomeCandidato2;
let nomeCandidato3;

let candidatos = [
    {nome: "Bolsonaryo", num: 17, partido: "PPF", qtdVotos: 15},
    {nome: "Lucas", num: 13, partido: "AACD", qtdVotos: 23},
    {nome: "Thiago", num: 80, partido: "AA", qtdVotos: 23},
    {nome: "Kauan", num: 22, partido: "VASP", qtdVotos: 34},
    {nome: "Juliana", num: 50, partido: "ACDC", qtdVotos: 0},
    {nome: "Branco", num: 5, partido: "", qtdVotos: 0}
]

candidatos.sort(function(a, b) {
    if(a.qtdVotos > b.qtdVotos) return -1 
    else return true
})

console.log(`O candidato ganhador é: ${candidatos[0].nome} ${candidatos[0].partido} `)

for (let i=1; i < candidatos.length;i++) {
    if (candidatos[0].qtdVotos == candidatos[i].qtdVotos) {
        console.log("Empate!!!!")
        break
    }
}

//Verifica voto para candidatos pré-configurados
// for(let i=0; i<candidatos.length;i++) {
//         if(candidatos[i].num==voto) console.log(candidatos[i].qtdVotos)
// }

let data

let confirmaSom = document.getElementById("confirma")
// let audio = document.createElement('audio')
// document.body.appendChild(audio);
// audio.src = "./audio/confirmacao.mp3"
// audio.autoplay = true
// audio.muted = true

function verificarIntegridadeUrna(){
    fetch('script.js')
    .then(conteudo => conteudo.text())
    .then(conteudo => CryptoJS.SHA256(conteudo).toString())
    .then(hashUrnaAtual => {
        fetch('./hashVerificado')
        .then(conteudo => conteudo.text())
        .then(hashVerificado => {
            if(hashUrnaAtual === hashVerificado) console.log('Urna íntegra')
            else console.log('HASHES DIFERENTES, URNA ADULTERADA')

            console.log(`Hash esperado: ${hashVerificado}`)
            console.log(`Hash da urna: ${hashUrnaAtual}`)
        })
    })
}

function urnaEletronica() {
    console.log('Iniciando o programa')
    console.clear()

    console.log('** CONFIGURAÇÃO DA URNA **')
    let senhaMesario = parseInt(prompt('Configure a senha do mesário: '))
    //===========================configuração dos candidatos==========================
    // do {
    //     nomeCandidato1 = prompt('Digite o nome do primeiro candidato')
    //     nomeCandidato2 = prompt('Digite o nome do segundo candidato')
    //     nomeCandidato3 = prompt('Digite o nome do terceiro candidato')

    //     console.log('** NOMES DOS CANDIDATOS **')
    //     console.log('Candidato 1: '+ nomeCandidato1)
    //     console.log('Candidato 2: '+ nomeCandidato2)
    //     console.log('Candidato 3: '+ nomeCandidato3)
 
    // } while (!confirm('Se o nomes dos candidatos estão corretos, clique em OK para continuar ou CANCELAR para voltar e digitar novamente.'))

    //=========================data===================//
    data = new Date()
    do {
        console.clear()
        console.log('Opções de voto:')
        for(let a=0; a < candidatos.length;a++) {
            console.log(`(${candidatos[i].num}) ${candidatos[i].nome} ${candidatos[i].partido}`)
        }
        
        // console.log('(1) Candidato 1: '+ nomeCandidato1)
        // console.log('(2) Candidato 2: '+ nomeCandidato2)
        // console.log('(3) Candidato 3: '+ nomeCandidato3)
        // console.log('(5) Branco')
        // console.log('(8) Nulo')
        voto = parseInt(prompt('Digite sua opção de voto'))
        totalVotos++
        
        // //Verifica voto para candidatos pré-configurados
        // for(let i=0; i<candidatos.length;i++) {
        //     for(let j=0; j<candidatos[i].length;j++) {
        //         console.log(candidatos[i[j]])
        //     }
        // }
        
        usuarioConfirmaVoto()
        if (voto == 1 && confirmaVoto) {
            votosCandidato1++
            confirmaSom.play()
        } else if (voto == 2 && confirmaVoto) {
            votosCandidato2++
            confirmaSom.play()
        } else if (voto == 3 && confirmaVoto) {
            votosCandidato3++
            confirmaSom.play()
        } else if (voto == 5 && confirmaVoto) {
            votosBrancos++
            confirmaSom.play()
        } else if (voto === senhaMesario) {
            encerrarVotacao = confirm('Deseja encerrar a votação?')
            if(encerrarVotacao) {
                totalVotos--
            }
        } else {
            if(confirm('Voto Nulo selecionado, confirma esta opção de voto?')) {
                votosNulos++
                confirmaSom.play()
            }
            else totalVotos--
        }
    } while(encerrarVotacao !== true)
    
    //
    if (totalVotos > 0) {
        console.clear()
        verificarIntegridadeUrna()
        //saida para o usuario: boletim de urna
        console.log('**BOLETIM DE URNA**')
        console.log(`Data de inicio da votação: ${data}`)
        data = new Date()
        console.log(`Data de término da votação: ${data}`)
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

function usuarioConfirmaVoto() {
    for(let b=0;b < candidatos.length; b++) {
        if (voto==candidatos[b].num) {
            confirmaVoto = confirm(`Candidato ${candidatos[b].nome} selecionado, confirma esta opção de voto?`)
        }
    }

// if (voto == 1) {
//     confirmaVoto = confirm('Candidato '+ nomeCandidato1 + ' selecionado, confirma esta opção de voto?')
// } else if (voto == 2) {
//     confirmaVoto = confirm('Candidato '+ nomeCandidato2 + ' selecionado, confirma esta opção de voto?')
// } else if (voto == 3) {
//     confirmaVoto = confirm('Candidato '+ nomeCandidato3 + ' selecionado, confirma esta opção de voto?')
// } else if (voto == 5) {
//     confirmaVoto = confirm('Voto Branco selecionado, confirma esta opção de voto?')
// }
return 
}

//======================Texto a ser criptografado======================
//const text = "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

//======================Função de criptografia======================
// async function digestMessage(message) {
//   const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
//   const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
//   const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
//   const hashHex = hashArray
//     .map((b) => b.toString(16).padStart(2, "0"))
//     .join(""); // convert bytes to hex string
//   return hashHex;
// }

//digestMessage(text).then((digestHex) => console.log(digestHex));

//======================Código retirado da documentação======================
//https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest