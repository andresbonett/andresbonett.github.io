var t = document.getElementById("textbox");
var colorbox = document.getElementById("colorbox");
var b = document.getElementById("boton");
var colorcito = "black";
b.addEventListener("click", clickBoton);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(c, x1, y1, x2, y2) {
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.moveTo(x1, y1);
	lienzo.lineTo(x2, y2);
	lienzo.stroke();
	lienzo.closePath();
}

function clickBoton(){
	
	lienzo.clearRect(0, 0, d.width, d.height);
	colorcito = colorbox.value;
	console.log(colorcito);
	var lineas = parseInt(t.value);
	var espacio = ancho / lineas;
	var l = 0;
	var yi, xf;
	var nyi;
	var nxf = 300;

	for (l = 0; l < lineas; l++) {
		yi = espacio * l;
		xf = yi++;
		nxf = nxf - espacio;
		dibujarLinea(colorcito,0,yi,xf,300);
		dibujarLinea(colorcito,300,yi,xf,0);
		dibujarLinea(colorcito,yi,300,300,nxf);
		dibujarLinea(colorcito,0,nxf,yi,0);
	}
	dibujarLinea("red",1,1,1,299);
	dibujarLinea("red",1,299,299,299);
	dibujarLinea("green",299,299,299,1);
	dibujarLinea("green",299,1,1,1);
}
dibujarLinea("red",1,1,1,299);
dibujarLinea("red",1,299,299,299);
dibujarLinea("green",299,299,299,1);
dibujarLinea("green",299,1,1,1);
console.log(colorcito);