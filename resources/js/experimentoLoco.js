//VARIABLES
var canvas, contexto;

canvas = document.getElementById( 'canvasId' );
contexto =  canvas.getContext( '2d' );

contexto.beginPath();
contexto.arc(canvas.width / 2, canvas.height / 2, 3, 0 , 2 * Math.PI);
contexto.fillStyle = 'black';
contexto.fill();
	