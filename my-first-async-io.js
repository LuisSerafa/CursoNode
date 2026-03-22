// Importa o módulo nativo do Node para trabalhar com sistema de arquivos
const fs = require('fs')

// Lê um arquivo de forma assíncrona (sem travar o programa)
// process.argv[2] é o terceiro argumento da linha de comando
// Exemplo: node my-first-async-io.js arquivo.txt
fs.readFile(process.argv[2], 'utf-8', (err, conteudo) => {
    // Se houver erro na leitura, mostra mensagem e sai da função
   if (err) return
    

    // Divide o texto em linhas usando \n e conta quantas linhas existem
    // O desafio pede contar quantas quebras de linha existem: comprimento - 1
    const linhas = conteudo.split('\n').length - 1

    // Exibe no console o número de linhas do arquivo
    console.log(linhas)
})