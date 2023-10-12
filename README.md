# Simulação de uma urna eletrônica

Este projeto visa simular o funcionamento de uma urna eletrônica utilizando estruturas de repetição para permitir múltiplas votações.
1. O programa deve apresentar as seguintes opções de voto:

>  | Dígito    | Opção |
>  | -------- | :-------: |
>  | 1  | Candidato 1         |
>  | 2  | Candidato 2         |
>  | 3  | Candidato 3         |
>  | 5  | Voto branco         |
>  | 8  | Voto nulo           |
>  | 0  | Encerrar a Votação  |

3. O programa deve solicitar ao usuário que digite o número do seu voto e armazenar a opção de voto em uma variável.

4. Se o usuário escolher uma das opções de candidato, o programa deve incrementar o contador de votos do respectivo candidato.

5. Se o usuário escolher a opção voto em branco, o programa deve incrementar o contador de votos em branco.

6. Se o usuário escolher a opção voto nulo, o programa deve incrementar o contador de votos nulos.

7. Se o usuário escolher a opção encerrar a votação, o programa deve sair do laço e exibir o resultado final da votação:
quantidade e percentual de votos de cada candidato
quantidade e percentual de votos em branco e votos nulos
candidato ganhador, com o seu total de votos e percentual (acrescidos os votos em branco)
 
8. O programa deve continuar a permitir a votação até que o usuário escolha a opção para encerrar a votação.

## Algoritmo descritivo

1. Inicie o programa

2. Zere os contadores de votação

3. Execute a sequência de passos:

    3.1 Apresente ao usuário a lista de opções para votação:

    ```
    | 1 | Candidato 1
    | 2 | Candidato 2
    | 3 | Candidato 3
    | 5 | Voto em branco
    | 8 | Voto nulo
    | 0 | Encerrar a votação
    ```

    3.2 Solicite ao usuário que ele escolha uma das opções acima

    3.3 Com base na escolha do usuário para a opção do voto:

        3.3.1 caso a opção do usuário seja 1, some 1 voto para o candidato 1

        3.3.2 caso a opção do usuário seja 2, some 1 voto para o candidato 2

        3.3.3 caso a opção do usuário seja 3, some 1 voto para o candidato 3

        3.3.4 caso a opção do usuário seja 5, some 1 voto como "branco"

        3.3.5 caso a opção do usuário seja 8, some 1 voto como "nulo"

4. enquanto a opção do usuário não for "0", repita os passos

5. apresente a quantidade e percentual de votos válidos do candidato 1

6. apresente a quantidade e percentual de votos válidos do candidato 2

7. apresente a quantidade e percentual de votos válidos do candidato 3

8. apresente a quantidade e percentual de votos brancos

9. apresente a quantidade e percentual de votos nulos

10. Determine o candidato ganhador:

    10.1 Se o candidato 1 teve mais votos que o candidato 2 e 3, então o candidato 1 é o ganhador

    10.2 se o canddiato 2 teve mais votos que o candidato 1 e 3, então o candidato 2 é o ganhador

    10.3 se o candidato 3 teve mais votos que o candidato 1 e 2, então o candidato 3 é o ganhador

    10.4 caso contrário, houve empate, portanto não há um ganhador

11. Apresente a situação final:

    11.1 se houver ganhador, então apresente:
    
        11.1.1 o candidato ganhador
        11.1.2 o total de votos
        11.1.3 o percentual de votos, incluídos os votos em branco

    11.2 caso contrário, informe que a situação é de empate

12. termine o programa
