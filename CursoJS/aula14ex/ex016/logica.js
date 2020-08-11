function contar() {
    let inicio = document.getElementById('numInicio')
    let fim = document.getElementById('numFim')
    let passo = document.getElementById('numPasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //verifica se todos campos são válidos
        alert('[Erro]: Por favor digite 0 ou um número positivo nos campos')
        res.innerHTML = `Impossível contar...`
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            p = 1
            alert('Passo inválido, considerando Passo 1')
        }

        if (i > f) {
            //contagem descrescente
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        } else {
            //contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}