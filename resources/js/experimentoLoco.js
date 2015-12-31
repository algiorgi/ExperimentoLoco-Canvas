//OBJETOS
function Copo(radio, color) {
	
	//ATRIBUTOS
	this.radio = radio;
	this.color = color; 
}


//VARIABLES
var canvas, contexto, copo;

canvas = document.getElementById( 'canvasId' );
contexto =  canvas.getContext( '2d' );

copo = new Copo(3, 'black');
copo.x = 10;
copo.y = 10;

dibujar(copo);	

otroCopo = new Copo(5, 'blue');
otroCopo.x = 20;
otroCopo.y = 10;

dibujar(otroCopo);

//FUNCIONES
function dibujar(copo) {
		
	contexto.beginPath();
	contexto.arc(copo.x, copo.y, copo.radio, 0 , 2 * Math.PI);
	contexto.fillStyle = copo.color;
	contexto.fill();	
	
} 	