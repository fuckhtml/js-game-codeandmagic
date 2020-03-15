'use strict';

//
// setup-similar
// Сборка и ренедр
//

!function(){
  
  var wizardsData = window.wizardsData;
  
  var wizardsList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);
  
  // Сборка и отрисовка похожего персонажа
  
  for (var i = 0; i < wizardsData.length; i++) {
    var wizardItem = wizardTemplate.cloneNode(true);
    
    wizardItem.querySelector('.setup-similar-label').textContent = wizardsData[i].name + ' ' + wizardsData[i].surname;
    wizardItem.querySelector('.wizard-eyes').style.fill = wizardsData[i].eyeColour;
    wizardItem.querySelector('.wizard-coat').style.fill = wizardsData[i].coatColour;
    wizardsList.append(wizardItem);
  }
  
  document.querySelector('.setup-similar').classList.remove('hidden');
  
}();

