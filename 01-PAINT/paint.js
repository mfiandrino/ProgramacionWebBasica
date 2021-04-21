var d = document.getElementById("canvasHTML");
var papel = d.getContext("2d");
var colorJS = document.getElementById("colorHTML");

var isDrawing = false;
var x,y;
var grosor = document.getElementById("cajaTexto");
grosor.value=2;

dibujarContorno();


d.addEventListener("mousedown",empezarDibujo);
d.addEventListener("mousemove",dibujar);
d.addEventListener("mouseup",terminarDibujo);

function empezarDibujo (evento)
{
  isDrawing = true;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujar (evento)
{
  if (isDrawing == true)
  {
    var color = colorJS.value;
    var mouseX = evento.layerX;
    var mouseY = evento.layerY;
    dibujarLinea(color,x,y,mouseX,mouseY,grosor.value);
    x = mouseX;
    y = mouseY;
  }
}

function terminarDibujo (evento)
{
  isDrawing = false;
}

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal,lineWidth)
{
  papel.beginPath(); //Arranca un trazo
  papel.strokeStyle = color; // Color del trazo
  papel.lineWidth = lineWidth;
  papel.moveTo(xInicial,yInicial); // Posicion del punto de inicio del trazo
  papel.lineTo(xFinal,yFinal); // funcion de trazar una linea (o arcos etc). Hasta donde es el trazo
  papel.stroke(); //Metodo que dibuja el trazo en pantalla
  papel.closePath();
}

function dibujarContorno ()
{
  dibujarLinea("black",0,0,0,d.height,4);
  dibujarLinea("black",0,d.height,d.width,d.height,4);
  dibujarLinea("black",d.width,d.height,d.width,0,4);
  dibujarLinea("black",d.width,0,0,0,4);
}
