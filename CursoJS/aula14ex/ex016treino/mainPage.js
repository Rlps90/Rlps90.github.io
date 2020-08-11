function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ATENÇÃO]: Digite um número nas caixas")
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            p = 1
            alert("[ATENÇÃO]: Passo inválido, assumindo passo 1")
        }

        if (i < f) { //contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        } else { //contagem descrescente
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        }

        res.innerHTML += `\u{1F3C1}`



    }



}