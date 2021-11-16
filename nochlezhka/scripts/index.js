//Скроллинг card в секции events
document
  .querySelector('.events__scroll-area')
  .addEventListener('wheel', function (event) {
    if (event.deltaY != 0) {
      this.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  });
