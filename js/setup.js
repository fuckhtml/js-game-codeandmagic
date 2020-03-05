'use strict';

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [
  {
    name: "Пендальф",
    coatColour: "black",
  },
  {
    name: "Яга",
    coatColour: "red",
  },
  {
    name: "Пендальф",
    coatColour: "green",
  },
  {
    name: "Пендальф",
    coatColour: "yellow",
  },
];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColour;
  
  similarListElement.appendChild(wizardElement);
}
