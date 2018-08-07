

var Nombre = "rich";
var Correo = "";
Nombre = Nombre.toUpperCase();
Correo = Correo.toUpperCase();
//Correo.toUpperCase;
// var nombre = 'Mike'
//Variable con acceso a datos
var TablaDeBaseDatos = firebase.database().ref("chat/" + Correo);
var ClienteDB = firebase.database().ref("chat");

ClienteDB.limitToLast(20).on("value", function(snapshot) {
  $(".clientes").html("");
  snapshot.forEach(function(e) {
    var objeto = e.key;
    $("#clientesPlantilla")
      .clone()
      .prependTo(".clientes");
    $(".clientes #clientesPlantilla").show(10);
    $(".clientes #clientesPlantilla .name").html(objeto);
    $(".clientes #clientesPlantilla").attr("id", "");
  });
});

cargarDatos(Correo);

//acciones --------------------
function BorrarChats() {
  var BorrarDB = firebase.database().ref("chat/" + Correo);
  BorrarDB.remove();
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
    Nombre: "WEBSOFTMX",
    Mensaje: $("#Mensaje").val(),
    Correo: Correo, 
    Fecha: Fecha
  });
});
