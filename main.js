const data = {
  football: [
    {
      id: 1,
      url: 'https://donglucsport.vn/products/qua-bong-da-so-5-impel-max-au',
      imageUrl: 'img/bong-1.webp',
      name: 'Quả bóng đá số 5 IMPEL MAX AU',
      price: '850,000₫'
    },
    {
      id: 2,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-2.jpg',
      name: 'BÓNG ĐÁ FIFA QUALITY SEA GAMES UHV 2.05 VICTOR',
      price: '1,030,000₫'
    },
    {
      id: 3,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-3.webp',
      name: 'BÓNG ĐÁ VICTOR 31 UCV 3.147 SỐ 5',
      price: '350,000₫'
    },
    {
      id: 4,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bong-4.webp',
      name: 'BÓNG ĐÁ AMITIE SỐ 4',
      price: '495,000₫'
    }
  ],
  basketball: [
    {
      id: 1,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bongchuyen-1.webp',
      name: 'BỘ THI ĐẤU ĐỘI TUYỂN BÓNG CHUYỀN NAM 2023',
      price: '455,000₫'
    },
    {
      id: 2,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bongchuyen-2.webp',
      name: 'BỘ THI ĐẤU ĐỘI TUYỂN BÓNG CHUYỀN NỮ 2023',
      price: '455,000₫'
    },
    {
      id: 3,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bongchuyen-3.webp',
      name: 'BÓNG CHUYỀN HƠI JATAN 300G JT-300',
      price: '85,000₫'
    },
    {
      id: 4,
      url: 'https://donglucsport.vn/products/bong-da-fifa-quality-sea-games-31-uhv-2-05',
      imageUrl: 'img/bongchuyen-4.webp',
      name: 'BÓNG CHUYỀN HƠI JATAN 150G',
      price: '60,000₫'
    }
  ],
  baseball: [
    {
      id: 1,
      url: 'https://donglucsport.vn/collections/bong-ro/products/bong-ro-da-microfiber-sb-1000',
      imageUrl: 'img/bongro-1.jpg',
      name: 'BỘ THI ĐẤU ĐỘI TUYỂN BÓNG CHUYỀN NAM 2023',
      price: '455,000₫'
    },
    {
      id: 2,
      url: 'https://donglucsport.vn/collections/bong-ro/products/bong-ro-da-microfiber-sb-2000',
      imageUrl: 'img/bongro-2.jpg',
      name: 'BỘ THI ĐẤU ĐỘI TUYỂN BÓNG CHUYỀN NỮ 2023',
      price: '455,000₫'
    },
    {
      id: 3,
      url: 'https://donglucsport.vn/collections/bong-ro/products/bong-ro-co-so-7-d7000-hieu-jatan',
      imageUrl: 'img/bongro-3.webp',
      name: 'BÓNG CHUYỀN HƠI JATAN 300G JT-300',
      price: '85,000₫'
    },
    {
      id: 4,
      url: 'https://donglucsport.vn/collections/bong-ro/products/bong-ro-co-so-6-d6000-hieu-jatan',
      imageUrl: 'img/bongro-4.jpg',
      name: 'BÓNG CHUYỀN HƠI JATAN 150G',
      price: '60,000₫'
    }
  ],
  futsal: [
    {
      id: 1,
      url: 'https://donglucsport.vn/collections/futsal-balls/products/bo-ng-da-trong-nha-sea-games-fs-1-147-futsal',
      imageUrl: 'img/bongfutsal-1.webp',
      name: 'BÓNG ĐÁ TRONG NHÀ SEA GAMES 31 FS 1.147 FUTSAL',
      price: '1,100,000₫'
    },
    {
      id: 2,
      url: 'https://donglucsport.vn/collections/futsal-balls/products/bong-da-trong-nha-futsal-galaxy-1-127',
      imageUrl: 'img/bongfutsal-2.webp',
      name: 'BÓNG ĐÁ TRONG NHÀ FUTSAL GALAXY 1.127',
      price: '935,000₫'
    },
    {
      id: 3,
      url: 'https://donglucsport.vn/collections/futsal-balls/products/bong-da-trong-nha-fus2-76',
      imageUrl: 'img/bongfutsal-3.webp',
      name: 'BÓNG ĐÁ TRONG NHÀ FUTSAL UHV 2.76',
      price: '550,000₫'
    },
    {
      id: 4,
      url: 'https://donglucsport.vn/collections/futsal-balls/products/bong-da-trong-nha-fus-galaxy-3-127',
      imageUrl: 'img/bongfutsal-4.webp',
      name: 'BÓNG ĐÁ TRONG NHÀ FUS GALAXY 3.127',
      price: '450,000₫'
    }
  ]
}

const containerEl = document.getElementById('container')

const activeBasketballBtn = document.getElementById('bong-chuyen-btn')
const activeFootballBtn = document.getElementById('bong-da-btn')
const activeBaseballBtn = document.getElementById('bong-ro-btn')
const activeFutsalBtn = document.getElementById('bong-futsal-btn')

window.addEventListener('load', () => {
  renderList(data.football)
})

activeFootballBtn.addEventListener('click', () => {
  renderList(data.football)
})

activeBasketballBtn.addEventListener('click', () => {
  renderList(data.basketball)
})

activeBaseballBtn.addEventListener('click', () => {
  renderList(data.baseball)
})

activeFutsalBtn.addEventListener('click', () => {
  renderList(data.futsal)
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
