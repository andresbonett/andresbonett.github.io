var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 100;
var y = 100;

// Dibujar Lineas

function dibujarLinea(c, x1, y1, x2, y2, lienzo) {
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.lineWidth = 2;
	lienzo.moveTo(x1, y1);
	lienzo.lineTo(x2, y2);
	lienzo.stroke();
	lienzo.closePath();
}
dibujarLinea("blue", x-1,y-1,x+1,y+1,papel);

// Eventos del Teclado

var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
// console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento) {
	var color = "green";
	var movimiento = 10;
	switch(evento.keyCode){
		case teclas.UP:
		dibujarLinea(color, x, y, x, y - movimiento, papel);
		y -= movimiento;
		break;
		case teclas.DOWN:
		dibujarLinea(color, x, y, x, y + movimiento, papel);
		y += movimiento;
		break;
		case teclas.LEFT:
		dibujarLinea(color, x, y, x - movimiento, y, papel);
		x -= movimiento;
		break;
		case teclas.RIGHT:
		dibujarLinea(color, x, y, x + movimiento, y, papel);
		x += movimiento;
		break;
	}
}

 // Eventos del Mouse 
cuadro.addEventListener("mousedown", mouseClickDown);
cuadro.addEventListener("mousemove", mouseClickMove);
cuadro.addEventListener("mouseup", mouseClickUp);



var mx;
var my;
var clickstataus;
var colorcito;

function mouseClickDown(mouse){
	colorcito = document.getElementById("colorbox").value;
	clickstataus = 1;
	mx = mouse.layerX;
	my = mouse.layerY;	
}

function mouseClickMove(mouse){

	if(clickstataus == 1){
		dibujarLinea(colorcito, mx, my, mouse.layerX, mouse.layerY, papel);
		mx = mouse.layerX;
		my = mouse.layerY;	
	}
}

function mouseClickUp(mouse){
	clickstataus = 0;
	mx = mouse.layerX;
	my = mouse.layerY;
	console.log(clickstataus);
}