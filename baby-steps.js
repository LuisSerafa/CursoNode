

// Inicializa a variável total com 0 para armazenar a soma
let result = 0

// Loop que inicia no índice 2 (pulando node e nome do arquivo)
// e vai até o final do array
for (let i = 2; i < process.argv.length; i++) {
    // Converte cada argumento para número e adiciona ao total
    // Number() transforma strings em números
    result += Number(process.argv[i])
}

// Exibe o resultado da soma
console.log(result)