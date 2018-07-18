d = document.getElementById("dibujito");
lienzo = d.getContext("2d");

function dibujarLinea(c, x1, y1, x2, y2) {
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.moveTo(x1, y1);
	lienzo.lineTo(x2, y2);
	lienzo.stroke();
	lienzo.closePath();
}
// Torre Eiffel
var lineas = 30;
var l = 0;
var yi, xf;
var nyi;
var nxf = 300;
var colorcito = "grey";

for (l = 0; l < lineas; l++) {
	yi = 10 * l;
	xf = yi++;
	nxf = nxf - 10;
	dibujarLinea(colorcito,0,yi,xf,300);
	dibujarLinea(colorcito,300,yi,xf,0);
	dibujarLinea(colorcito,yi,300,300,nxf);
	dibujarLinea(colorcito,0,nxf,yi,0);
}

dibujarLinea("red",1,1,1,299);
dibujarLinea("red",1,299,299,299);
dibujarLinea("green",299,299,299,1);
dibujarLinea("green",299,1,1,1);

// dibujarLinea("blue",100,100,200,100);
// dibujarLinea("red",200,100,200,200);
// dibujarLinea("yellow",200,200,100,200);
// dibujarLinea("green",100,200,100,100);