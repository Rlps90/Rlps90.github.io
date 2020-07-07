//Função para calculo da conversão de valores binários para decimais
function converter() {
    var binario = document.getElementById("binInput").value
    if (binario === '')
        return alert('Por favor insira um número binário') //Se o botão converter for clicado sem valor digitado, solicita ao usuário a insersão de um valor
    binario.split('').map((char) => { //Separa o valor digitado em um arranjo para verificar se apenas 0 e 1 foram digitados
        if (char !== '0' && char !== '1')
            return alert('Insira apenas 0 e 1')
    })
    var decimal = parseInt(binario, 2) //converte binário em decimal
    document.getElementById('decOutput').value = decimal
    return true
}