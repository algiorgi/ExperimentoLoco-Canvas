window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

// ------------- OBJETOS -------------
function Copo(posicionX, posicionY, radio, color) {
	
	//ATRIBUTOS
	this.posicionX = posicionX;
	this.posicionY = posicionY;
	this.radio = radio;
	this.color = color;
	
	//METODOS
	this.caer = function() {
		
		this.posicionY = this.posicionY + 1;
	}

	this.resetearPosicion = function() {
		
		this.posicionY = POS_Y_INICIAL;
	}	
}


// ------------- CONSTANTES Y VARIABLES -------------
const DELTA_TIME = 1 / 60; // En teoria es el delta entre cada llamada. O al menos es lo que intento declarar
const POS_Y_INICIAL = 10; // Desde esta altura van a caer todos los copos
const CANTIDAD_MAXIMA_DE_COPOS = 10; // Es la cantidad maxima de copos en pantalla
const  TIEMPO_ESPERA_PARA_CREAR_COPOS = 1.5; // Tiempo de espera para crear un copo nuevo
const RADIO_COPO = 3;
const COLOR_COPO = 'black';

var canvas, contexto, copos = [], cronometro = 0, cantidadDeCopos = 0;


// ------------- MAIN -------------
inicializar();
loop();

// ------------- FUNCIONES -------------

//Obtiene el canvas y el contexto
function inicializar() {
	
	canvas = document.getElementById( 'canvasId' );
	canvas.width = 320;
	canvas.height = 500;
	
	contexto =  canvas.getContext( '2d' );
}

//Esta funcion se llama con un fmr de 60 ( 1000 / 60 )
function loop() {
	
	requestAnimFrame(loop) //Se le pasa como callback la misma funcion y la va llamando 60 veces por segundo... en teoria
	crearCopos();
	
	redibujarPantalla();
}

//Crea algunos copos y los guarda en el array de copos
function crearCopos() {
	
	if (cronometro > TIEMPO_ESPERA_PARA_CREAR_COPOS && cantidadDeCopos < CANTIDAD_MAXIMA_DE_COPOS) {
		
		var x = numeroAleatorioEntre(0, canvas.width);
		copos.push( new Copo(x, POS_Y_INICIAL, RADIO_COPO, COLOR_COPO) );	
		cantidadDeCopos++;
		cronometro = 0;
	}
	
	cronometro = cronometro + DELTA_TIME;	
	
}

//Retorna un numero aleatorio entre un minimo y un maximo
function numeroAleatorioEntre(min, max) {
	
	return Math.floor(Math.random() * (max - min)) + min;	
}

//Vuelve a dibujar la pantalla
function redibujarPantalla() {

	contexto.clearRect(0, 0, canvas.width, canvas.height);
	
	for (i = 0; i < copos.length; i++) {
	
		copo = copos[i];
		copo.caer();
		dibujar(copo);
		
		if (copo.posicionY > canvas.height) {
			
			copo.resetearPosicion();
		}
	}

}

//Dibuja un copo
function dibujar(copo) {
		
	contexto.beginPath();
	contexto.arc(copo.posicionX, copo.posicionY, copo.radio, 0 , 2 * Math.PI);
	contexto.fillStyle = copo.color;
	contexto.fill();	
	
} 	