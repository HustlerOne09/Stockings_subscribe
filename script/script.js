const durationEL = document.getElementById('duration') // длительность
const periodicityEL = document.getElementById('periodicity') // частота
const sizeEL = document.getElementById('size') // размер
const priceEL = document.getElementById('price') // цена
let btn = document.getElementById('btn') // кнопка

function Calculator() {
    const duration = number(durationEL.value)
    const periodicity = number(periodicityEL.value)
    const size = number(sizeEL.value)

    const price = duration * periodicity * size

    priceEL.textContent = price
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    Calculator()
})