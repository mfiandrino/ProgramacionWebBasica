var textoJS = document.getElementById("textoHTML");
var parrafoJS = document.getElementById("parrafoHTML");

var botonJS = document.getElementById("botonHTML");
botonJS.addEventListener("click",retirar);

var imagenes = [];
imagenes["billete10"] = "img/billete10.png";
imagenes["billete20"] = "img/billete20.png";
imagenes["billete50"] = "img/billete50.png";
imagenes["billete100"] = "img/billete100.png";
imagenes["billete200"] = "img/billete200.png";
imagenes["billete500"] = "img/billete500.png";
imagenes["billete1000"] = "img/billete1000.png";


var cajero = [];
cajero.push(new Billete(10,1000));
cajero.push(new Billete(10,500));
cajero.push(new Billete(10,200));
cajero.push(new Billete(10,100));
cajero.push(new Billete(10,50));
cajero.push(new Billete(10,20));
cajero.push(new Billete(10,10));


function retirar()
{
  var importe = parseInt(textoJS.value);
  var cantBilletes = [];
  if (importe > 0)
  {
    for (var i in cajero)
    {
      cantBilletes.push(parseInt(importe/cajero[i].valorBilletes));
      if(cajero[i].cantBilletes < cantBilletes[i])
        cantBilletes[i] = cajero[i].cantBilletes;

      importe = importe - (cantBilletes[i] * cajero[i].valorBilletes);
    }

    if (importe == 0)
    {
      for (var i in cajero)
      {
        cajero[i].cantBilletes = cajero[i].cantBilletes - cantBilletes[i];
        while (cantBilletes[i])
        {
          cajero[i].mostrar();
          cantBilletes[i]--;
        }
      }
    }
    else
    {
      alert("No es posible entregar la cantidad deseada");
    }
  }
  else
  {
    alert("Debe ingresar un monto positivo");
  }
}
