"use strict";

var BG_X = 140;
var BG_Y = 10;
var BG_WIDTH = 420;
var BG_HEIGHT = 270;

var GAP = 20;

var HISTOGRAM_MAX_HEIGHT = 150;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_GAP_BETWEEN = 50;
var HISTOGRAM_GAP_TOP = 70;
  
var FONT_LINEHEIGHT = 20;

var drawRect = function(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

var drawText = function(ctx, message, x, y, color) {
  ctx.font = "16px PT Mono";
  ctx.fillStyle = color;
  ctx.fillText(message, x, y);
}

var collectPlayers = function(names, times) {
  var players = [];

  // collect players
  for (var i = 0; i < names.length; i++) {
    players[i] = {
      name: names[i],
      time: times[i],
    }
  }
  
  // sort players
  var i = 1;
  while (i < players.length) {
    if (players[i].time < players[i - 1].time) {
      var buff = players[i - 1];
      players[i - 1] = players[i];
      players[i] = buff;
      i -= 2; 
    }
    i++;
    if (i == 0) i++;
  }
  
  return players;
}

window.renderStatistics = function(ctx, names, times) {
  
  drawRect(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height, "blue");
  drawRect(ctx, BG_X + 10, BG_Y + 10, BG_WIDTH, BG_HEIGHT, "rgba(0, 0, 0, 0.7)");
  drawRect(ctx, BG_X     , BG_Y     , BG_WIDTH, BG_HEIGHT, "white");
    
  drawText(ctx, "Ура, вы победили", BG_X + GAP, BG_Y + GAP + FONT_LINEHEIGHT, "black");
  drawText(ctx, "Список результатов:", BG_X + GAP, BG_Y + GAP + FONT_LINEHEIGHT + FONT_LINEHEIGHT, "black");
  
  var players = collectPlayers(names, times);
  
  var k = HISTOGRAM_MAX_HEIGHT / players[players.length - 1].time;
  for (var i = 0; i < players.length; i++) {
    var histogramHeight = k * players[i].time;
    
    var histogramColor = "black";
    if (players[i].name == "Вы") {
      histogramColor = "rgba(255, 0, 0, 1)";
    } else {
      var saturation = Math.round(Math.random() * 100);
      histogramColor = "hsl(237, " + saturation + "%, 62%)";    
    }
    
    drawRect(ctx, 
             BG_X + GAP + (HISTOGRAM_WIDTH + HISTOGRAM_GAP_BETWEEN) * i, 
             BG_Y + HISTOGRAM_GAP_TOP + (HISTOGRAM_MAX_HEIGHT - histogramHeight), 
             HISTOGRAM_WIDTH, 
             histogramHeight, 
             histogramColor);
   drawText(ctx, 
            Math.round(players[i].time) / 1000, 
            BG_X + GAP + (HISTOGRAM_WIDTH + HISTOGRAM_GAP_BETWEEN) * i,
            BG_Y + HISTOGRAM_GAP_TOP + (HISTOGRAM_MAX_HEIGHT - histogramHeight) - 10,
            "black"
          )
    drawText(ctx, 
             players[i].name, 
             BG_X + GAP + (HISTOGRAM_WIDTH + HISTOGRAM_GAP_BETWEEN) * i,
             BG_Y + HISTOGRAM_GAP_TOP + HISTOGRAM_MAX_HEIGHT + FONT_LINEHEIGHT,
             "black"
           )
  }
  
}