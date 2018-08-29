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

var WIZARD_FIREBALLS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
// открытие похожих персонажей
//setup.querySelector('.setup-similar').classList.remove('hidden');

// Устанавливаем обработчики на открытие и закрытие
// setup через клики и клавиши
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

// Обработчик для закрытия setup при нажатии на Esc
var onPopupEscPress = function(event) {
  if (event.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');   

  // Добавим обработчик здесь, так как при  
  // закрытом окне ESC работает для паузы
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden'); 
  // Удаляем обработчик, чтобы не повторять 
  // это действие при закрытом окне
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function(event) {
  openPopup();
});

setupOpen.addEventListener('keydown', function(event) {
  if (event.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(event) {
  if (event.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Задаем валидацию на ввод имени
var userNameInput = setup.querySelector(".setup-user-name");
userNameInput.addEventListener('invalid', function(event) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя должно состоять максимум из 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  }
});
// Дополнительная валидация для edge, т.к. minlength в нем не работает
userNameInput.addEventListener('input', function(event) {
  var target = event.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// Задаем обработчики для смены характеристик персонажа
var player = document.querySelector(".setup-player");
// Меняет цвет мантии
var playerCoat = player.querySelector(".wizard-coat");
var changeCoat = function() {
  playerCoat.style.fill = WIZARD_COATS[ getRandomValue(0, WIZARD_COATS.length) ];
}
playerCoat.addEventListener('click', changeCoat);

// Меняет цвет глаз
var playerEyes = player.querySelector(".wizard-eyes");
var changeEyes = function() {
  playerEyes.style.fill = WIZARD_EYES[ getRandomValue(0, WIZARD_EYES.length) ];
}
playerEyes.addEventListener('click', changeEyes);

// Меняет цвет фаербола
var playerFireball = player.querySelector(".setup-fireball-wrap");
var changeFireball = function() {
  playerFireball.style.backgroundColor = WIZARD_FIREBALLS[ getRandomValue(0, WIZARD_FIREBALLS.length) ];
}
playerFireball.addEventListener('click', changeFireball);

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