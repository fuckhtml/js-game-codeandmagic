'use strict';

//
// setup-player
// Сборка, рендер и интерактив
//

!function() {
  
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
  
  
  var setupPlayer = document.querySelector('.setup-player');
  
  var playerCoat = setupPlayer.querySelector('.wizard-coat');
  var playerEyes = setupPlayer.querySelector('.wizard-eyes');
  var playerFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  
  var playerCoatInput = setupPlayer.querySelector('input[name=\'coat-color\']');
  var playerEyesInput = setupPlayer.querySelector('input[name=\'eyes-color\']');
  var playerFireballInput = setupPlayer.querySelector('input[name=\'fireball-color\']');
  
  
  playerCoat.addEventListener('click', setPlayerCoatColour);
  playerEyes.addEventListener('click', setPlayerEyesColour);
  playerFireball.addEventListener('click', setPlayerFireballColour);

}();
