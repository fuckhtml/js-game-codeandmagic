'use strict';

window.renderStatistics = function(ctx, names, times) {

  // Рисуем облако с тенью
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(100, 20, 420, 270);
  ctx.fillStyle = "white";
  ctx.fillRect(100, 10, 420, 270);

  // Пишем заголовок
  var fontFamily = 'PT Mono';
  var fontSize = 16;
  var color = 'black';
  var initialX = 220; // ***
  var initialY = 40;

  ctx.fillStyle = color;
  ctx.font = fontSize + ' ' + fontFamily;
  ctx.fillText('Ура вы победили!', initialX, initialY);
  ctx.fillText('Список результатов:', initialX, initialY + fontSize);

  // Ищем максимальное время (для вычисления коэффициента ширины гистограммы)
  var maxTime = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
      maxIndex = i; 
    }
  }

  // Отрисовываем горизонтальную гистограмму
  var histogramHeight = 150;
  var barWidth = 40;
  var spaceBetween = 50;
  var initialX = 120;
  var initialY = 80 + histogramHeight;
  var lengthPerTime = histogramHeight / maxTime;

  for (var i = 0; i < names.length; i++) {
    var barX1 = initialX + i * (barWidth + spaceBetween);
    var barY1 = initialY;
    var barX2 = barWidth;
    var barY2 = -1 * (times[i] * lengthPerTime);

    if (names[i] == 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'blue';
    }
    
    ctx.fillRect(barX1, barY1, barX2, barY2);

    var name = names[i];
    var nameX = initialX + i * (barWidth + spaceBetween);
    var nameY = initialY + fontSize;
    ctx.fillText(name, nameX, nameY);
  }

};