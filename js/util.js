'use strick';

(function() {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {

    escPressedSoDo: function(event, action) {
      if (event.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    enterPressedSoDo: function(event, action) {
      if (event.keyCode === ENTER_KEYCODE) {
        action();
      }
    }

  } // Конец объекта util

})();