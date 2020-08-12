'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.utils = {
    isEscKeyCode: function (event) {
      return event.keyCode === ESC_KEYCODE;
    },

    isEnterKeyCode: function (event) {
      return event.keyCode === ENTER_KEYCODE;
    },
  };

})();
