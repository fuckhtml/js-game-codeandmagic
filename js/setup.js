'use strick'

var WIZARD_NAMES = [ 
  'Иван', 
  'Хуан Себастьян', 
  'Мария', 
  'Кристоф',
  'Виктор', 
  'Юлия', 
  'Люпита', 
  'Вашингтон' 
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Открываем главный блок персонажа при запуске
var userDialog = document.querySelector('.overlay.setup');
userDialog.classList.remove('hidden'); 
userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Находим контейнер для персонажей и темплейт для персонажа. Сборка персонажа
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var renderWizard = function() {  
  var wizardElement = similarWizardTemplate.cloneNode(true);

  var wizardName = wizardElement.querySelector('.setup-similar-label');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');

  wizardName.innerText = 
    WIZARD_NAMES[getRandomValue(0, WIZARD_NAMES.length)] + ' ' + 
    WIZARD_SURNAMES[getRandomValue(0, WIZARD_SURNAMES.length)];
  wizardCoat.style.fill = WIZARD_COATS[getRandomValue(0, WIZARD_COATS.length)];
  wizardEyes.style.fill = WIZARD_EYES[getRandomValue(0, WIZARD_EYES.length)];

  return wizardElement;
}

var getRandomValue = function(from, till) {
  return ( from + Math.floor( Math.random() * (till - from) ) );
}

// Отрисовываем персонажей
var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild( renderWizard() );
}
similarListElement.appendChild( fragment );