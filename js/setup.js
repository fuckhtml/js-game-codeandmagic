'use strick';

(function() {

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

  // открытие похожих персонажей
  //setup.querySelector('.setup-similar').classList.remove('hidden');


  /*****************************************
  
        ПЕРЕТАСКИВАНИЕ АРТЕФАКТОВ
  
  ******************************************/
  // Делаем это через делегирование на всплытии, т.к. в магазине много элементов.
  // На всплытии проверяем target.alt
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var isDraggedFromShop = false;

  shopElement.addEventListener('dragstart', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      draggedItem = event.target;
      isDraggedFromShop = true;
      event.dataTransfer.setData('text/plain', event.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');
  // разрешает перетаскивание элемента
  artifactsElement.addEventListener('dragover', function(event) {
    event.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('dragstart', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      draggedItem = event.target;
      event.dataTransfer.setData('text/plain', event.target.alt);
    }
  });


  // копирует или переносит draggedItem в artifactsElement
  // ловит событие через делегирование на всплытии
  artifactsElement.addEventListener('drop', function(event) {
    event.target.style.border = '';
    if (event.target.tagName.toLowerCase() === 'div') {
      if (isDraggedFromShop) {
        event.target.appendChild(draggedItem.cloneNode(true));
        isDraggedFromShop = false;
      } else {
        event.target.appendChild(draggedItem);
      }
      draggedItem = null;
      event.preventDefault();      
    } 
  });
  // закрашивает квадрат над которым мы перетаскиваем элемент
  artifactsElement.addEventListener('dragenter', function(event) {
    event.target.style.border = '2px dashed red';
    event.preventDefault();
  });
  // убирает фон квадрата
  artifactsElement.addEventListener('dragleave', function(event) {
    event.target.style.border = '';
    event.preventDefault();
  });


  /*****************************************
  
        ВАЛИДАЦИЯ НА ВВОД ИМЕНИ
  
  ******************************************/
  var setup = document.querySelector('.setup');
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


  /*****************************************
  
        ИЗМЕНЕНИЕ ВНЕШНЕГО ВИДА ПЕРСОНАЖА
  
  ******************************************/
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

})();
