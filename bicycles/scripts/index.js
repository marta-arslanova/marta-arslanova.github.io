// Слайдер
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Данные карточкек

const cards = {
  tt: [
    {
      name: 'Модель велосипеда',
      link: 'images/SpecializedS-WorksShiv.png',
      descriptionModel: 'Specialized S-Works Shiv',
    },
    {
      name: 'Модель велосипеда',
      link: 'images/BMCTimemachine01ONE.png',
      descriptionModel: 'BMC Timemachine 01 ONE',
    },
    {
      name: 'Модель велосипеда',
      link: 'images/CerveloP-Series.png',
      descriptionModel: 'Cervelo P-Series',
    },
  ],
  gravel: [
    {
      name: 'Модель велосипеда',
      link: 'images/CerveloAsperoGRX810.png',
      descriptionModel: 'Cervelo Aspero GRX 810',
    },
    {
      name: 'Модель велосипеда',
      link: 'images/SpecializedS-WorksDiverge.png',
      descriptionModel: 'Specialized S-Works Diverge',
    },
    {
      name: 'Модель велосипеда',
      link: 'images/CannondaleTopstoneLefty3.png',
      descriptionModel: 'Cannondale Topstone Lefty 3',
    },
  ],
  highway: [
    {
      name: 'Модель велосипеда',
      link: 'images/CerveloCaledonia-5.png',
      descriptionModel: 'Cervelo Caledonia-5',
    },
    {
      name: 'Модель велосипеда',
      link: 'images/CannondaleSystemsixHimod.png',
      descriptionModel: 'Cannondale Systemsix Himod',
    },
    {
      name: 'Модель велосипеда',
      link: 'images/TrekDomaneSL-7.png',
      descriptionModel: 'Trek Domane SL-7',
    },
  ],
};

const bicyclesCard = document.querySelector('.bicycles');
const bicycleWrapper = bicyclesCard.querySelector('.bicycles__wrapper');
const bicycleCardBtns = bicyclesCard.querySelectorAll('.menu-bicycle__button');
const bicycleCardTemplate = document.querySelector('#figure').content;

function switchBicycleCardActiveBtn(id) {
  bicycleCardBtns.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add('menu-bicycle__button_active');
    } else {
      btn.classList.remove('menu-bicycle__button_active');
    }
  });
}

function renderBicycleCards(id) {
  bicycleWrapper.innerHTML = '';

  cards[id].forEach((card) => {
    const bicycleCard = createBicycleCard(card);
    bicycleWrapper.append(bicycleCard);
  });
}

function createBicycleCard(card) {
  const cardBicycleElement = bicycleCardTemplate.querySelector('.bicycle-card').cloneNode(true);
  const cardBicycleImage = cardBicycleElement.querySelector('.bicycle-card__image');
  const cardBicycleDescr = cardBicycleElement.querySelector('.bicycle-card__descr');
  cardBicycleImage.src = card.link;
  cardBicycleImage.alt = card.name;
  cardBicycleDescr.textContent = card.descriptionModel;
  return cardBicycleElement;
}

function switchBicycleCards(event) {
  const idElement = event.srcElement.id;
  switchBicycleCardActiveBtn(idElement);
  renderBicycleCards(idElement);
}

bicycleCardBtns.forEach((btn) => {
  btn.addEventListener('click', switchBicycleCards);
});

function initBicycleCards() {
  renderBicycleCards('highway');
}
initBicycleCards();