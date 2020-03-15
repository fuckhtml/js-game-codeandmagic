'use strict';

// 
// setup
// Интерактив
// 


// 1-3 | Открытие-скрытие
!function(){
  
  var openPopup = function() {
    
    var closePopup = function () {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }
    
    var onPopupEscPress = function(event) {
      if (event.keyCode === 27) {
        closePopup();
      }
    }
  
    // *** 
    
    var setupClose = document.querySelector('.setup-close');
    
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        closePopup();
      }
    });
    document.addEventListener('keydown', onPopupEscPress);
    
    setup.classList.remove('hidden');
  }
  
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  
  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      openPopup();
    }
  });
  
}();


// 2-3 | Валидация
!function(){
  
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
  
}();


// 3-3 | Перетаскивание 
!function(){
  
  var setup = document.querySelector('.setup');
  var setupUserPic = setup.querySelector('.setup-user-pic-file');
  
  setupUserPic.addEventListener('mousedown', function (event) {  
    
    var onClickPreventDefault = function(event) {
      event.preventDefault();
    }
    
    var onMouseMove = function (event) {
      dragged = true;
  
      var shift = {
        x: startCoords.x - event.clientX,
        y: startCoords.y - event.clientY,
      };
      
      startCoords = {
        x: event.clientX,
        y: event.clientY,
      };
      
      setup.style.left = (setup.offsetLeft - shift.x) + "px";
      setup.style.top = (setup.offsetTop - shift.y) + "px";
    }
    
    var onMouseUp = function (event) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      
      if (dragged) {
        var onClickPreventDefault = function(event) {
          event.preventDefault();
          setupUserPic.removeEventListener('click', onClickPreventDefault);
        }
        setupUserPic.addEventListener('click', onClickPreventDefault);
      }
    }
    
    var startCoords = {
      x: event.clientX,
      y: event.clientY,
    };
    
    var dragged = false;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  
}();
