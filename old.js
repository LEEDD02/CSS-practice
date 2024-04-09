const footballDivEl = document.getElementById('bong-da')
const basketballDivEl = document.getElementById('bong-chuyen')

const activeFootballBtn = document.getElementById('bong-da-btn')
const activeBasketballBtn = document.getElementById('bong-chuyen-btn')

activeBasketballBtn.addEventListener('click', () => {
  activeBasketballBtn.classList.add('active')
  basketballDivEl.classList.add('show')
  basketballDivEl.classList.remove('hidden')

  activeFootballBtn.classList.remove('active')
  footballDivEl.classList.add('hidden')
  footballDivEl.classList.remove('show')
})

activeFootballBtn.addEventListener('click', () => {
  activeFootballBtn.classList.add('active')
  footballDivEl.classList.add('show')
  footballDivEl.classList.remove('hidden')

  activeBasketballBtn.classList.remove('active')
  basketballDivEl.classList.add('hidden')
  basketballDivEl.classList.remove('show')
})
