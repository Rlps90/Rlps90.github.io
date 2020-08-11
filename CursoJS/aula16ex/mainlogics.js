let vetor = []
let num = document.getElementById("numtxt")
let tab = document.getElementById("tabela")
let res = document.getElementById("resultado")

function isNumero(n) {
    //Verifica se o número digitado está entre os valores permitidos
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    //Se for um número novo, retorna verdadeiro
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarNum() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        //verifica se o número está entre o minimo e o máximo E se já está ou não no vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        item.value = `tab${num.value}`
        tab.appendChild(item)
        vetor.push(Number(num.value))

    } else {
        //Acusa erro se valor já foi digitado ou espaço está vazio
        alert("[ERRO]: Valor inválido ou já está na lista.")
    }

}

function calculos() {
    //Ordena o vetor de forma crescente e exibe informações ao usuário
    vetor.sort((a, b) => a - b)
    res.innerHTML += `Ao todo temos ${vetor.length} números cadastrados.<br/>
        O maior valor informado foi ${vetor.reduce((a,b) => Math.max(a,b))}.<br/>
        O menor valor informado foi ${vetor.reduce((a,b) => Math.min(a,b))}.<br/>
        Somando todos os valores temos ${vetor.reduce((a,b)  => a+b, 0)}.<br/>
        A média dos valores digitados é ${vetor.reduce((a,b)  => a+b, 0) / vetor.length}.`
}


function limpar() {
    vetor = []
    tab.innerHTML = ''
    res.innerHTML = ''
}