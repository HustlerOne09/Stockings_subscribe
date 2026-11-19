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

    if (duration === 8) {
        price = (duration * periodicity * size) * 0.9
    } else {
        price = duration * periodicity * size
    }

    priceEL.textContent = price
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    Calculator()
})