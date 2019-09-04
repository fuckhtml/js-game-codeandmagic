'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarWizardsList = userDialog.querySelector('.setup-similar-list');
var similarWizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = [
  'Дамболдор',
  'Гарри Поттер',
  'Рон Уизли',
  'Воланд-де-Морд',
];

var wizards = [
  {
    name: wizardNames[0],
    coatColor: 'rgb(241, 43, 107)',
  },
  {
    name: wizardNames[1],
    coatColor: 'rgb(215, 210, 55)',
  },
  {
    name: wizardNames[2],
    coatColor: 'rgb(101, 137, 164)',
  },
  {
    name: wizardNames[3],
    coatColor: 'rgb(127, 127, 127)',
  },
];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardsTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  similarWizardsList.appendChild(wizardElement);
}
