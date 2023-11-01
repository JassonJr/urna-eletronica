let voto = 0, votosNulos = 0, totalVotos = 0, ganhador = true, encerrarVotacao = false, confirmaVoto = false, votoValido = false;


//===========================configuração dos candidatos==========================
let candidatos = [
    {
        nome: "Bolsonaryo", 
        num: 17, 
        partido: "PPF", 
        qtdVotos: 0
    },
    {
        nome: "Lucas", 
        num: 13, 
        partido: "AACD", 
        qtdVotos: 0
    },
    {
        nome: "Thiago", 
        num: 80, 
        partido: "AA", 
        qtdVotos: 0
    },
    {
        nome: "Kauan", 
        num: 22, 
        partido: "VASP", 
        qtdVotos: 0
    },
    {
        nome: "Juliana", 
        num: 50, 
        partido: "ACDC", 
        qtdVotos: 0
    },
    {
        nome: "Branco", 
        num: 5, 
        partido: "", 
        qtdVotos: 0
    }
]

// candidatos.sort(function(a, b) {
//     if(a.qtdVotos > b.qtdVotos) return -1 
//     else return true
// })

//console.log(`O candidato ganhador é: ${candidatos[0].nome} ${candidatos[0].partido} `)

// for (let i=1; i < candidatos.length;i++) {
//     if (candidatos[0].qtdVotos == candidatos[i].qtdVotos) {
//         console.log("Empate!!!!")
//         break
//     }
// }

//Verifica voto para candidatos pré-configurados
// for(let i=0; i<candidatos.length;i++) {
//         if(candidatos[i].num==voto) console.log(candidatos[i].qtdVotos)
// }

let data

let confirmaSom = document.getElementById("confirma")

async function verificarIntegridadeUrna(){
    
    let hashUrnaAtual
    let hashVerificado

    await fetch('script.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(conteudo => hashUrnaAtual = conteudo) 
    
    await fetch('./hashVerificado')
        .then(conteudo => conteudo.text())
        .then(conteudo => hashVerificado = conteudo)

    return {
        status: hashUrnaAtual === hashVerificado,
        hashUrnaAtual: hashUrnaAtual,
        hashVerificado: hashVerificado
    }
}

async function audioConfirma() {
    const audio = new Audio('./audio/confirmacao.mp3')
    await audio.play()
}

async function urnaEletronica() {
    console.log('Iniciando o programa')
    console.clear()

    console.log('** CONFIGURAÇÃO DA URNA **')
    let senhaMesario = parseInt(prompt('Configure a senha do mesário: '))

    //=========================data===================//
    data = new Date()
    do {
        votoValido = false
        console.clear()
        console.log('Opções de voto:')
        for(let a=0; a < candidatos.length;a++) {
            console.log(`(${candidatos[a].num}) ${candidatos[a].nome} ${candidatos[a].partido}`)
        }
        
        voto = parseInt(prompt('Digite sua opção de voto'))
        totalVotos++
        usuarioConfirmaVoto()
        
        for(let b=0;b < candidatos.length;b++) {
            if (voto == candidatos[b].num && confirmaVoto) {
                candidatos[b].qtdVotos++
                votoValido = true
                await audioConfirma()
                break
            }
        } 
        if (voto === senhaMesario) {
            votoValido = true
            encerrarVotacao = confirm('Deseja encerrar a votação?')
            if(encerrarVotacao) {
                totalVotos--
            }
        }
        if(!votoValido) {
            if(confirm('Voto Nulo selecionado, confirma esta opção de voto?')){
                votosNulos++
                await audioConfirma()
            }
            else totalVotos--
        }
    } while(encerrarVotacao !== true)
    
    //
    if (totalVotos > 0) {
        candidatos.sort(function(a, b) {
            if(a.qtdVotos > b.qtdVotos) return -1 
            else return true
        })
        console.clear()

        //saida para o usuario: boletim de urna
        console.log('**BOLETIM DE URNA**')
        console.log(`Data de inicio da votação: ${data}`)
        data = new Date()
        console.log(`Data de término da votação: ${data}`)
        console.log('Total de votos: ' + totalVotos)
        for(let i=0;i < candidatos.length;i++){
            console.log(`Total de votos do candidato ${candidatos[i].nome}: ${candidatos[i].qtdVotos} votos (${(candidatos[i].qtdVotos/totalVotos*100).toFixed(1)}%)`)
        }
        console.log('Total de votos Nulos: ' + votosNulos + ' votos ('+(votosNulos / totalVotos * 100).toFixed(1)+'%)')
        
        //determina ganhador
        for (let i=1; i < candidatos.length;i++) {
            if (candidatos[0].qtdVotos == candidatos[i].qtdVotos) {
                console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos)')
                ganhador = false
                break
            }
            else {
                ganhador = true
                break
            }
        }
        
        //exibição do ganhador
        if (ganhador) {
            console.log(`O ganhador desta urna foi: ${candidatos[0].nome} ${candidatos[0].partido} com ${(candidatos[0].qtdVotos/totalVotos*100).toFixed(1)} %`)
            return
        }
    } 
    else {
        console.clear()
        console.log('Total de votos: ' + totalVotos)
        console.log('Não houve votação nesta urna')
        return
    }
}

function usuarioConfirmaVoto() {
    for(let c=0;c < candidatos.length; c++) {
        if (voto==candidatos[c].num) {
            confirmaVoto = confirm(`Candidato ${candidatos[c].nome} selecionado, confirma esta opção de voto?`)
            if (confirmaVoto) break
        }
    }
    return 
}

verificarIntegridadeUrna().then(verificacao => {
    if(verificacao.status) {
        console.log("Hashes veríficados, urna íntegra")
    } else {

    }
})

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