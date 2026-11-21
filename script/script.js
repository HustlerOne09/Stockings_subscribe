const durationEL = document.getElementById('duration') // длительность
const periodicityEL = document.getElementById('periodicity') // частота
const sizeEL = document.getElementById('size') // размер
const priceEL = document.getElementById('price') // цена
let btn = document.getElementById('btn') // кнопка

function Calculator() {
    const duration = Number(durationEL.value)
    const periodicity = Number(periodicityEL.value)
    const size = Number(sizeEL.value)
    let price = 0

    price = duration * periodicity * size

    if (duration * periodicity * size == 1) {
        price = 0
    }

    if (duration === 8) {
        price = price * 0.9
    }
    priceEL.textContent = price
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    Calculator()
})

const prints = ['🧦', '🌈', '🦄', '🐸', '🍕', '💀', '🌸', '⚡', '🍄', '👽', '😎', '🤓', '💵', '💩', '🤡']
let L = ''
let R = ''

function openM() {
    document.getElementById('m').style.display = 'block'
}

function closeM() {
    document.getElementById('m').style.display = 'none'
    L = ''
    R = ''
    document.getElementById('P1').textContent = '?'
    document.getElementById('P2').textContent = '?'
    document.getElementById('ab').disabled = true
    document.querySelectorAll('.prints button').forEach(function (b) {
        b.classList.remove('on')
    })
}

function pick(p, side, el) {
    if (side == 1) {
        L = p;
        document.getElementById('P1').textContent = p
    } else {
        R = p;
        document.getElementById('P2').textContent = p
    }
    let g = document.getElementById(side == 1 ? 'L' : 'R')
    g.querySelectorAll('button').forEach(function (b) {
        b.classList.remove('on')
    })
    el.classList.add('on')
    if (L && R) {
        document.getElementById('ab').disabled = false
    }
}

function addP() {
    if (!L || !R) return
    alert('Пара: ' + L + ' ' + R)
    closeM()
}

prints.forEach(function (p) {
    ['L', 'R'].forEach(function (side) {
        let b = document.createElement('button')
        b.textContent = p
        b.onclick = function () {
            pick(p, side == 'L' ? 1 : 2, b)
        }
        document.getElementById(side).appendChild(b)
    })
})