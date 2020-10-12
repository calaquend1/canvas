//default

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'purple';
ctx.strokeStyle = 'purple';
ctx.fillRect(50, 50, 50, 50);
ctx.strokeRect(40,40,80,80);

//circle

const canvasCircle = document.getElementById('canvasCircle');
const ctxC = canvasCircle.getContext('2d');
ctxC.beginPath();
ctxC.arc(100, 100, 50, 0, 2 * Math.PI);
ctxC.stroke();

//triangle

const canvasTriangle = document.getElementById('canvasTriangle');
const ctxT = canvasTriangle.getContext('2d');
ctxT.beginPath();
ctxT.moveTo(200, 75);
ctxT.lineTo(100, 75);
ctxT.lineTo(100, 25);
ctxT.fill();

// heart
const canvasHeart = document.getElementById('canvasHeart');
const ctxH = canvasHeart.getContext('2d');
ctxH.beginPath();
ctxH.moveTo(75, 40);
ctxH.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctxH.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctxH.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctxH.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctxH.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctxH.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctxH.stroke();
const download = document.getElementById('download');
download.addEventListener('click', function(e) {
var link = document.createElement('a');
link.download = 'download.png';
link.href = canvas.toDataURL()
link.click();
link.delete;

});

// square
const canvasSquare = document.getElementById('canvasSquare');
const ctxS = canvasSquare.getContext('2d');

for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        ctxS.strokeStyle = 'rgb(255, ' + Math.floor(255 - 42.5 * i) + ', ' +
                         Math.floor(255 - 42.5 * j) + ')';
        ctxS.beginPath();
        ctxS.strokeRect(j * 25, i * 25, 25,  25);
        ctxS.stroke();
      }
    }

ctxS.fillStyle = 'rgba(46, 196, 182, 0.5)';
ctxS.fillRect(25,25,100,100);

ctxS.fillStyle = 'rgba(231, 29, 54, 0.5)';
ctxS.fillRect(75,75,100,100);
