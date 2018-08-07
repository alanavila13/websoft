var Nombre = "";
var Correo = "";
Nombre = Nombre.toUpperCase();
Correo = COrreo.toUpperCase();
var TablaDeBaseDatos = firebase.database().ref("chat/" + Correo);

cargarDatos(Correo);

function nombrar() {
  Nombre = document.formChat.clienteNombre.value;
  Correo = document.formChat.clienteCorreo.value;
  Nombre = Nombre.toUpperCase();
  TablaDeBaseDatos = firebase.database().ref("chat/" + Correo);
}

$("#btnEnviar").click(function() {
  var formatofecha = new Date();
  var d = formatofecha.getUTCDate();
  var m = formatofecha.getMonth() + 1;
  var y = formatofecha.getFullYear();
  var h = formatofecha.getHours();
  var min = formatofecha.getMinutes();

  Fecha = d + "/" + m + "/" + y + " " + h + ":" + min;
  TablaDeBaseDatos.push({
    Nombre: Nombre,
    Mensaje: $("#Mensaje").val(),
    Correo: Correo,
    Fecha: Fecha
  });
  cargarDatos(Correo);
});
