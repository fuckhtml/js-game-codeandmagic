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

document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function() {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function() {
  setup.classList.add('hidden');
});

