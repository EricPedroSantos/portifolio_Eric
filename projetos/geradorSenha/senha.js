function gerarSenha(){
    let caractere = '/#$%&@*()?abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let senha = ''
    let tamanho = 10

    for (let i = 0; i < tamanho; i++){
        let randomCaractere = Math.floor(Math.random() * caractere.length)
        senha += caractere.substring(randomCaractere, randomCaractere + 1)
    }

    document.getElementById('senha').innerHTML = senha
}