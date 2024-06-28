function tabuada() {
    var num = window.document.getElementById('num')
    var end = window.document.getElementById('end')
    var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var r = ''
    var res = window.document.getElementById('result')
    
    if (n == '' || e == '') {
        window.alert('[ERRO] Confira os dados!')
    } else {
        res.innerHTML = `A tabuada do ${n} é:`
        do {
            r = n * x
            res.innerHTML += `<br> ${x} X ${n} = ${r}` 
            x++
        } while (x <= e);
    }
}