let num = 0

function diminuir() {

    var display = document.getElementById('display')

    if (num > 0) {
        num--
    }

    display.innerText = num

}

function aumentar() {

    var display = document.getElementById('display')

    num++

    display.innerText = num

}

function limpar() {

    var display = document.getElementById('display')

    num = 0

    display.innerText = num

}