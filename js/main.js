'use strict';

(function () {

    const servicesButtons = document.querySelectorAll('.services__card-button');
    const servicesItems = document.querySelectorAll('.services__card');

    console.log(servicesItems);
    console.log(servicesButtons);

    servicesItems.forEach((item) => {
      item.classList.add('services__card--close');
      item.querySelector('.services__card-button').addEventListener('click', () => {
        if (item.classList.contains('services__card--close')) {
              item.classList.remove('services__card--close');
              item.querySelector('.services__card-button').innerHTML = "Скрыть";
            } else {
              item.classList.add('services__card--close');
              item.querySelector('.services__card-button').innerHTML = "Подробнее";
            }
      });
    });
})();
