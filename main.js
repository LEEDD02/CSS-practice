const data = {
  football: [
    {
      id: 1,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'FOOTBALL',
      price: '1,000,000đ'
    },
    {
      id: 2,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'FOOTBALL',
      price: '1,000,000đ'
    },
    {
      id: 3,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'FOOTBALL',
      price: '1,000,000đ'
    },
    {
      id: 4,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'FOOTBALL',
      price: '1,000,000đ'
    }
  ],
  basketball: [
    {
      id: 1,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'BASKETBALL',
      price: '1,000,000đ'
    },
    {
      id: 2,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'BASKETBALL',
      price: '1,000,000đ'
    },
    {
      id: 3,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'BASKETBALL',
      price: '1,000,000đ'
    },
    {
      id: 4,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-1.webp',
      name: 'BASKETBALL',
      price: '1,000,000đ'
    }
  ]
}

const containerEl = document.getElementById('container')

const activeBasketballBtn = document.getElementById('bong-chuyen-btn')
const activeFootballBtn = document.getElementById('bong-da-btn')

window.addEventListener('load', () => {
  renderList(data.football)
})

activeFootballBtn.addEventListener('click', () => {
  renderList(data.football)
})

activeBasketballBtn.addEventListener('click', () => {
  renderList(data.basketball)
})

function renderList(data) {
  containerEl.innerHTML = data.map(item => {
    return `
      <div class="bongcontent-container">
        <div class="bongimg-container">
          <a href="${item.url}">
            <img
              class="bongimg"
              src="${item.imageUrl}"
              alt="${item.id}"
              title="${item.name}"
            />
          </a>
        </div>
        <div>
          <a href="https://donglucsport.vn/products/qua-bong-da-so-5-impel-max-au">
            <p class="textbong">${item.name}</p>
          </a>
          <div class="bongprice-container">
            <h1>${item.price}</h1>
          </div>
        </div>
      </div>
    `
  })
}
