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

// const cards = {
//   tt: [
//     {
//       name: 'Модель велосипеда',
//       link: 'images/SpecializedS-WorksShiv.png',
//       descriptionModel: 'Specialized S-Works Shiv',
//       webkitURL: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9'
//     },
//     {
//       name: 'Модель велосипеда',
//       link: 'images/BMCTimemachine01ONE.png',
//       descriptionModel: 'BMC Timemachine 01 ONE',
//       webkitURL: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
//     },
//     {
//       name: 'Модель велосипеда',
//       link: 'images/CerveloP-Series.png',
//       descriptionModel: 'Cervelo P-Series',
//       webkitURL: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q',
//     },

//   ],
//     gravel: [
//     {
//       name: 'Модель велосипеда',
//       link: 'images/CerveloAsperoGRX810.png',
//       descriptionModel: 'Cervelo Aspero GRX 810',
//       webkitURL: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
//     },
//     {
//       name: 'Модель велосипеда',
//       link: 'images/SpecializedS-WorksDiverge.png',
//       descriptionModel: 'Specialized S-Works Diverge',
//       webkitURL: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
//     },
//     {
//       name: 'Модель велосипеда',
//       link: 'images/CannondaleTopstoneLefty3.png',
//       descriptionModel: 'Cannondale Topstone Lefty 3',
//       webkitURL: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',
//     },
//   ],
//   highway: [
//     {
//       name: 'Модель велосипеда',
//       link: 'images/CerveloCaledonia-5.png',
//       descriptionModel: 'Cervelo Caledonia-5',
//       webkitURL: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN ',
//     },
//     {
//       name: 'Модель велосипеда',
//       link: 'images/CannondaleSystemsixHimod.png',
//       descriptionModel: 'Cannondale Systemsix Himod',
//       webkitURL: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
//     },
//     {
//       name: 'Модель велосипеда',
//       link: 'images/TrekDomaneSL-7.png',
//       descriptionModel: 'Trek Domane SL-7',
//       webkitURL: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
//     },

//   ],
// };

// const bicyclesCard = document.querySelector('.bicycles');
// const bicycleWrapper = bicyclesCard.querySelector('.bicycles__wrapper');
// const bicycleCardBtns = bicyclesCard.querySelectorAll('.menu-bicycle__button');
// const bicycleCardTemplate = document.querySelector('#figure').content;

// function switchBicycleCardActiveBtn(id) {
//   bicycleCardBtns.forEach((btn) => {
//     if (btn.id === id) {
//       btn.classList.add('menu-bicycle__button_active');
//     } else {
//       btn.classList.remove('menu-bicycle__button_active');
//     }
//   });
// }

// function renderBicycleCards(id) {
//   bicycleWrapper.innerHTML = '';

//   cards[id].forEach((card) => {
//     const bicycleCard = createBicycleCard(card);
//     bicycleWrapper.append(bicycleCard);
//   });
// }

// function createBicycleCard(card) {
//   const cardBicycleElement = bicycleCardTemplate.querySelector('.bicycle-card').cloneNode(true);
//   const cardBicycleImage = cardBicycleElement.querySelector('.bicycle-card__image');
//   const cardBicycleDescr = cardBicycleElement.querySelector('.bicycle-card__descr');
//   const cardBicycleLink = cardBicycleElement.querySelector('.bicycle-card__link');
//   cardBicycleImage.src = card.link;
//   cardBicycleImage.alt = card.name;
//   cardBicycleDescr.textContent = card.descriptionModel;
//   cardBicycleLink.textContent = card.url;
//   return cardBicycleElement;
// }

// function switchBicycleCards(event) {
//   const idElement = event.srcElement.id;
//   switchBicycleCardActiveBtn(idElement);
//   renderBicycleCards(idElement);
// }

// bicycleCardBtns.forEach((btn) => {
//   btn.addEventListener('click', switchBicycleCards);
// });

// function initBicycleCards() {
//   renderBicycleCards('highway');
// }
// initBicycleCards();
