class Billete
{
  constructor(cantBilletes,valorBilletes)
  {
      this.imagen = new Image();
      this.cantBilletes = cantBilletes;
      this.valorBilletes = valorBilletes;
      this.imagen.src = imagenes["billete" + this.valorBilletes];
  }

  mostrar()
  {
    document.body.appendChild(this.imagen.cloneNode(true));
  }
}
