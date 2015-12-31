// ------------- OBJETOS -------------
function Copo(posicionX, posicionY, radio, color) {
	
	//ATRIBUTOS
	this.posicionX = posicionX;
	this.posicionY = posicionY;
	this.radio = radio;
	this.color = color; 
}


// ------------- MAIN -------------
var canvas, contexto, copos = [];

inicializar();
crearCopos();

for (i = 0; i < copos.length; i++) {
	dibujar(copos[i]);
}



// ------------- FUNCIONES -------------

//Obtiene el canvas y el contexto
function inicializar() {
	
	canvas = document.getElementById( 'canvasId' );
	canvas.width = 320;
	canvas.height = 500;
	
	contexto =  canvas.getContext( '2d' );
}

//Crea algunos copos y los guarda en el array de copos
function crearCopos() {
	
	var radio = 3;
	var negro = 'black';
	
	copos.push( new Copo(10, 10, radio, negro) );
	copos.push( new Copo(35, 10, radio, negro) );
	copos.push( new Copo(70, 10, radio, negro) );
	copos.push( new Copo(150, 10, radio, negro) );
	copos.push( new Copo(220, 10, radio, negro) );
	copos.push( new Copo(300, 10, radio, negro) );	
}

//Dibuja un copo
function dibujar(copo) {
		
	contexto.beginPath();
	contexto.arc(copo.posicionX, copo.posicionY, copo.radio, 0 , 2 * Math.PI);
	contexto.fillStyle = copo.color;
	contexto.fill();	
	
} 	