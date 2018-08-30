'use strick';

( function() {

  /*****************************************
  
        ОТКРЫТИЕ/ЗАКРЫТИЕ/ПЕРЕТАСКИВАНИЕ 
        ОКНА setup
  
  ******************************************/
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  // Обработчик для закрытия setup при нажатии на Esc
  var onPopupEscPress = function(event) {
    window.util.escPressedSoDo(event, closePopup);
  };

  var openPopup = function() {
    setup.classList.remove('hidden');   

    // Добавим обработчик здесь, так как при  
    // закрытом окне ESC работает для паузы
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function() {
    setup.classList.add('hidden');
    setup.style.left = '';
    setup.style.top = '';
    // Удаляем обработчик, чтобы не повторять 
    // это действие при закрытом окне
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function(event) {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function(event) {
    window.util.enterPressedSoDo(event, openPopup);
  });

  setupClose.addEventListener('click', function() {
    closePopup();
  });

  setupClose.addEventListener('keydown', function(event) {
    window.util.enterPressedSoDo(event, closePopup);
  });

  // Задаем обработчики окна setup на клик/перетаскивание/остановку 
  var setupHandle = setup.querySelector(".setup-user-pic");

  setupHandle.addEventListener("mousedown", function(event) {
    event.preventDefault();

    var startCoords = {
      x: event.clientX,
      y: event.clientY
    };

    var onMouseMove = function(moveEvent) {
      moveEvent.preventDefault();

      var shift = {
        x: startCoords.x - moveEvent.clientX,
        y: startCoords.y - moveEvent.clientY      
      };

      startCoords = {
        x: moveEvent.clientX,
        y: moveEvent.clientY
      }

      setup.style.left = setup.offsetLeft - shift.x + 'px';
      setup.style.top = setup.offsetTop - shift.y + 'px';
    }

    var onMouseUp = function(upEvent) {
      upEvent.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

})();