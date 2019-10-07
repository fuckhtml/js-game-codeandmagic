'use strict';

(function () {

  // открытие закрытие

  var userOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var userClose = setup.querySelector('.setup-close');

  var onSetupEscPress = function (event) {
    if (window.utils.isEscKeyCode(event)) {
      closeSetup();
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
  };
  var closeSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
  };

  userOpen.addEventListener('click', function () {
    openSetup();
  });
  userOpen.addEventListener('keydown', function (event) {
    if (window.utils.isEnterKeyCode(event)) {
      openSetup(event);
    }
  });

  userClose.addEventListener('click', function () {
    closeSetup();
  });
  userClose.addEventListener('keydown', function (event) {
    if (window.utils.isEnterKeyCode) {
      closeSetup(event);
    }
  });

  // перетаскивание

  var dialogHandler = setup.querySelector('.setup-user > .upload');
  dialogHandler.addEventListener('mousedown', function (event) {
    event.preventDefault();

    var startCoords = {
      x: event.clientX,
      y: event.clientY,
    };

    var dragged = false;

    var onMouseMove = function (moveEvent) {
      moveEvent.preventDefault();

      dragged = true;

      var shift = {
        x: moveEvent.clientX - startCoords.x,
        y: moveEvent.clientY - startCoords.y,
      };

      startCoords = {
        x: moveEvent.clientX,
        y: moveEvent.clientY,
      };

      setup.style.top = (setup.offsetTop + shift.y) + 'px';
      setup.style.left = (setup.offsetLeft + shift.x) + 'px';
    };

    var onMouseUp = function (upEvent) {
      upEvent.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefauld = function (event) {
          event.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefauld);
        };
        dialogHandler.addEventListener('click', onClickPreventDefauld);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // валидация

  var userNameInput = setup.querySelector('.setup-user-name');
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    }
  });
})()
