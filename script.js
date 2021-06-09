'use strict';

function init() {
  //BUTTON NAV ------------------------------------------------------------------------------
  const openButton = document.querySelector('.navigation__icon--open');
  const closeButton = document.querySelector('.navigation__icon--close');
  const hiddenNavigation = document.querySelector('.navigation__nav');
  const hiddenLinks = document.querySelectorAll('.navigation__link');
  // HIDDEN FORM ----------------------------------------------------------------------------
  const headerForm = document.querySelector('#formHeader');
  const formCloseButton = document.querySelector('#formCloseButton');
  const formInput = document.querySelectorAll('.form__input');
  const labelForm = document.querySelectorAll('.form__label');
  const discountForm = document.querySelector('.form__discount');
  const randomDiscount = Math.trunc(Math.random() * 30) + 20 + '%';
  //Trainers --------------------------------------------------------------------------------
  const coachInfo = document.querySelectorAll('.trainer');
  const coachButton = document.querySelector('.trainers__button');
  // CARDS ----------------------------------------------------------------------------------
  const classCard = document.querySelectorAll('.card');
  const buttonCard = document.querySelectorAll('.card__button');

  const removeActiveClasses = function (button, navigation) {
    button.classList.remove('hiddenIcon');
    navigation.classList.remove('hidden');
  };
  const addActiveClasses = function (button, navigation) {
    button.classList.add('hiddenIcon');
    navigation.classList.add('hidden');
  };

  hiddenLinks.forEach(link => {
    link.addEventListener('click', () => {
      hiddenNavigation.classList.add('hidden');
      closeButton.classList.add('hiddenIcon');
      removeActiveClasses(openButton);
    });
  });

  openButton.addEventListener('click', () => {
    removeActiveClasses(closeButton, hiddenNavigation);
    openButton.classList.add('hiddenIcon');
  });

  closeButton.addEventListener('click', () => {
    addActiveClasses(closeButton, hiddenNavigation);
    openButton.classList.remove('hiddenIcon');
  });

  discountForm.innerHTML = randomDiscount;
  setTimeout(() => {
    headerForm.style.visibility = 'visible';
  }, 3050);

  // CLOSE BUTTON---------------------------------------------------------------
  formCloseButton.addEventListener('click', () => {
    headerForm.classList.add('hidden');
  });

  // FORM INPUTS---------------------------------------------------------------
  formInput.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('formAnimation');
      labelForm.forEach(label => {
        label.classList.add('labelAnimation');
      });
    });
  });
  formInput.forEach(item => {
    item.addEventListener('keydown', () => {
      item.classList.add('formAnimation');
      labelForm.forEach(label => {
        label.classList.add('labelAnimation');
      });
    });
  });

  formInput.forEach(item => {
    headerForm.addEventListener('mouseleave', () => {
      item.classList.remove('formAnimation');
      labelForm.forEach(label => {
        label.classList.remove('labelAnimation');
      });
    });
  });

  //CLASSES CARDS --------functionality by coding_cat-------------------------------------------------------

  classCard.forEach(card => {
    card.addEventListener('mouseenter', () => {
      buttonCard.forEach(button => {
        button.classList.add('classesButtonAnimation');
      });
    });
  });

  //Trainers --------------------------------FETCH API
  // const trainers = document.querySelectorAll('.trainer');
  // console.log(trainers);

  // function getUsers() {
  //   fetch('https://randomuser.me/api/?results=3')
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(data => {
  //       // console.log(data.results[0].picture.large);

  //       trainers.forEach(trainer => {
  //         trainer.innerHTML = `<div><img src ="${data.results[1].picture.large}"alt="random person image" class="trainer__image"></div>`;
  //       });

  //       // Access your data here
  //     });
  // }

  // getUsers();

  //Trainers ---------------------------------------------------------------

  coachButton.addEventListener('click', () => {
    coachInfo.forEach(coach => {
      coach.classList.toggle('trainerHiddenInfo');
    });
  });
  //MAP ---------------------------------------------------------------
  const map = L.map('map').setView([50.0755381, 14.4378005], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const gymIcon = L.icon({
    iconUrl: 'img/logomap.png',

    iconSize: [40, 40],

    iconAnchor: [20, 100],

    popupAnchor: [0, -100],
  });

  L.marker([50.0578399, 14.4316543], { icon: gymIcon })
    .addTo(map)
    .bindPopup('Guardian Gym')
    .openPopup();
}

init();
