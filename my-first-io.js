// Importa o módulo nativo de arquivos do Node.js
// 'fs' significa File System
const fs = require('fs')

// Lê o arquivo que o usuário passou como argumento
// process.argv[2] é o terceiro item na lista de argumentos do Node
// (0 = caminho do node, 1 = caminho do script, 2 = primeiro argumento do usuário)
// 'utf-8' é o encoding para ler o conteúdo como texto
const conteudo = fs.readFileSync(process.argv[2], 'utf-8')

// Separa o texto em linhas com base no caractere de nova linha '\n'
// split('
') gera um array onde cada elemento é uma linha
// .length - 1 conta quantas quebras de linha existem, que é o que o exercício pede
const linhas = conteudo.split('\n').length - 1

// Exibe a quantidade de linhas no terminal
console.log(linhas)