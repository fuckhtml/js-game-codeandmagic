'use strict';

var generateWizardsData = function() {
  var names = [
    'Иван', 
    'Хуан Себастьян', 
    'Мария', 
    'Кристоф', 
    'Виктор', 
    'Юлия', 
    'Люпита', 
    'Вашингтон',
  ];
  
  var surnames = [
    'да Марья', 
    'Верон', 
    'Мирабелла', 
    'Вальц', 
    'Онопко', 
    'Топольницкая', 
    'Нионго', 
    'Ирвинг'
  ];

  var coatColours = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];
  
  var eyeColours = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];

  var wizardsData = [];

  for (var i = 0; i < 4; i++) {
    var name = names[ Math.floor( Math.random() * names.length ) ];
    var surname = surnames[ Math.floor( Math.random() * surnames.length ) ];
    var coatColour = coatColours[ Math.floor( Math.random() * coatColours.length ) ];
    var eyeColour = eyeColours[ Math.floor( Math.random() * eyeColours.length ) ];

    var wizard = {
      name: name,
      surname: surname,
      coatColour: coatColour,
      eyeColour: eyeColour,
    }
    
    wizardsData[i] = wizard;
  }

  return wizardsData;
}

var wizardsData = generateWizardsData();

var wizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);

for (var i = 0; i < 4; i++) {
  var wizardItem = wizardTemplate.cloneNode(true);
  
  wizardItem.querySelector('.setup-similar-label').textContent = wizardsData[i].name + ' ' + wizardsData[i].surname;
  wizardItem.querySelector('.wizard-eyes').style.fill = wizardsData[i].eyeColour;
  wizardItem.querySelector('.wizard-coat').style.fill = wizardsData[i].coatColour;
  wizardsList.append(wizardItem);
}

var setupPlayer = document.querySelector('.setup-player');

var playerCoat = setupPlayer.querySelector('.wizard-coat');
var playerEyes = setupPlayer.querySelector('.wizard-eyes');
var playerFireball = setupPlayer.querySelector('.setup-fireball-wrap');

var playerCoatInput = setupPlayer.querySelector('input[name=\'coat-color\']');
var playerEyesInput = setupPlayer.querySelector('input[name=\'eyes-color\']');
var playerFireballInput = setupPlayer.querySelector('input[name=\'fireball-color\']');
console.log(playerCoatInput);
console.log(playerEyesInput);
console.log(playerFireballInput);

var setPlayerCoatColour = function() {
  var coatColours = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];
  var colour = coatColours[Math.floor(Math.random() * coatColours.length)];
  playerCoat.style.fill = colour;
  playerCoatInput.value = colour;
};

var setPlayerEyesColour = function() {
  var eyeColours = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];
  var colour = eyeColours[Math.floor(Math.random() * eyeColours.length)];
  playerEyes.style.fill = colour;
  playerEyesInput.value = colour;
}

var setPlayerFireballColour = function() {
  var fireballColours = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];
  var colour = fireballColours[Math.floor(Math.random() * fireballColours.length)];
  playerFireball.style.background = colour;
  playerFireballInput.value = colour;
}

playerCoat.addEventListener('click', setPlayerCoatColour);
playerEyes.addEventListener('click', setPlayerEyesColour);
playerFireball.addEventListener('click', setPlayerFireballColour);

document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function(event) {
  if (event.keyCode === 27) {
    closePopup();
  }
}

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);

setupOpen.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    closePopup();
  }
});

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function() {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Укажите имя')
  } else {
    userNameInput.setCustomValidity('');
  }
});

/*
userNameInput.addEventListener('input', function(event) {
  var target = event.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (target.value.length > 25) {
    target.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (target.value.length == 0){
    target.setCustomValidity('Введите имя');
  } else {
    target.setCustomValidity('');
  }
})
*/