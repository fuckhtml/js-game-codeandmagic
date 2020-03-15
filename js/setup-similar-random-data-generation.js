'use strict';

//
// setup-similar Random Data Generation
// Генерация массива похожих персонажей со случайными данными
//

!function(){
  
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
    
    var wizardsQuantity = 4;
  
    var wizardsData = [];
  
    for (var i = 0; i < wizardsQuantity; i++) {
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
  
  window.wizardsData = generateWizardsData();

}();
