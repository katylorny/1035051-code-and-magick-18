'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var HISTOGRAM_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR__GAP = 50;
  var zeroY = CLOUD_Y + CLOUD_HEIGHT - GAP * 4;
  var zeroX = CLOUD_X + GAP * 4;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {


    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура, вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var barHeight = HISTOGRAM_HEIGHT * times[i] / maxTime;
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
      }

      ctx.fillRect(zeroX + (BAR_WIDTH + BAR__GAP) * i, zeroY, BAR_WIDTH, -barHeight);
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], zeroX + (BAR_WIDTH + BAR__GAP) * i, zeroY + GAP);
      ctx.fillText(Math.round(times[i]), zeroX + (BAR_WIDTH + BAR__GAP) * i, zeroY - barHeight - GAP * 2);
    }

  };
})();
