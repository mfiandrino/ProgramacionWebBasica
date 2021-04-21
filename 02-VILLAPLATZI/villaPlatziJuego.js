var canvasJS = document.getElementById("canvasHTML");
papel = canvasJS.getContext("2d");

var mapa = {
  url: "img/tile.png",
  cargaOK: false
};

var minion = {
  url:  "img/minionR.png",
  urlR: "img/minionR.png",
  urlL: "img/minionL.png",
  cargaOKR: false,
  cargaOKL: false,
  x: 250,
  y: 250
};

var banana = {
  url:  "img/banana.png",
  cargaOK: false,
  clickOK: false,
  x: 100,
  y: 100,
};

var minionVioleta = {
  url: "img/minionVioleta.png",
  cargaOK: false,
}

var teclas = {
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37
};


//-------------------------Funciones de teclado-------------------------//

document.addEventListener("keydown", moverMinion)


function moverMinion(tecleo)
{
  switch(tecleo.keyCode)
  {
    case teclas.UP:
      minion.y = minion.y - 10;
      dibujar();
    break;

    case teclas.DOWN:
      minion.y = minion.y + 10;
      dibujar();
    break;

    case teclas.RIGHT:
      minion.x = minion.x + 10;
      minion.url = minion.urlR;
      dibujar();
    break;

    case teclas.LEFT:
      minion.x = minion.x - 10;
      minion.url = minion.urlL;
      dibujar();
    break;

    default:
    break;
  }
}


//-------------------------Funciones de carga de imagenes-------------------------//
mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load",cargarMapa);

minion.imagenR = new Image();
minion.imagenR.src = minion.urlR;
minion.imagenR.addEventListener("load",cargarMinionR);

minion.imagenL = new Image();
minion.imagenL.src = minion.urlL;
minion.imagenL.addEventListener("load",cargarMinionL);

banana.imagen = new Image();
banana.imagen.src = banana.url;
banana.imagen.addEventListener("load",cargarBanana);

minionVioleta.imagen = new Image();
minionVioleta.imagen.src = minionVioleta.url;
minionVioleta.imagen.addEventListener("load", cargarminionVioleta);


function cargarMapa()
{
  mapa.cargaOK = true;
  dibujar();
}

function cargarMinionR()
{
  minion.cargaOKR = true;
  dibujar();
}

function cargarMinionL()
{
  minion.cargaOKL = true;
}

function cargarBanana()
{
  banana.cargaOK = true;
  dibujar();
}

function cargarminionVioleta()
{
    minionVioleta.cargaOK = true;
}

//-------------------------Funciones de botones-------------------------//


bananaJS = document.getElementById("bananaHTML");
bananaJS.addEventListener("click",clickBanana);


function clickBanana()
{
banana.clickOK = true;
banana.x = numeroRandom(0,42)*10;
banana.y = numeroRandom(0,42)*10;
dibujar();
}

//-------------------------Funciones de dibujo-------------------------//

function dibujar()
{
  if (mapa.cargaOK)
    papel.drawImage(mapa.imagen,0,0);
  console.log("banana.x = " + banana.x)
  console.log("banana.y = " + banana.y)
  if (banana.cargaOK)
    papel.drawImage(banana.imagen,banana.x,banana.y);

  if(minion.x == banana.x-10 && minion.y == banana.y-30)
  {
    if (minionVioleta.cargaOK)
    {
      papel.drawImage(minionVioleta.imagen,minion.x-30,minion.y-30);
    }
  }
  else
  {
  console.log("minion.x = " + minion.x)
  console.log("minion.y = " + minion.y)
    if (minion.cargaOKR && minion.url == minion.urlR)
    {
      papel.drawImage(minion.imagenR,minion.x,minion.y);
    }
    if (minion.cargaOKL && minion.url == minion.urlL)
    {
      papel.drawImage(minion.imagenL,minion.x,minion.y);
    }
  }
}

//-----------------------------------------------------------------------------
//Funciones matematicas

function calcularRedondeo(num)
{
  if(num >= 0)
  {
    if (num-parseInt(num) >= 0.5)
      return Math.ceil(num);
    else
      return Math.floor(num);
  }
  else
  {
    if (num+parseInt(num) >= -0.5)
      return Math.ceil(num);
    else
      return Math.floor(num);
  }

}

function numeroRandom(min,max)
{
  var dif = max-min; // 30
  var numero = (Math.random() * dif / 0.9999999999999999) + min
  return calcularRedondeo(numero);
}
