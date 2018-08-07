function cargarDatos(nom) {
  Nombre = nom;
  TablaDeBaseDatos = firebase.database().ref("chat/" + nom);
  TablaDeBaseDatos.limitToLast(20).on("value", function(snapshot) {
    $(".chat").html(""); // Limpiamos todo el contenido del chat

    // Leer todos los mensajes en firebase
    snapshot.forEach(function(e) {
      var objeto = e.val(); // Asignar todos los valores a un objeto

      // Validar datos nulos y agregar contenido en forma de lista etiqueta <li>
      if (objeto.Mensaje != null && objeto.Nombre != null) {
        // Copia el contenido al template y luego lo inserta en el chat
        $("#plantilla")
          .clone()
          .appendTo(".chat");
        $(".chat #plantilla").show(10);
        $(".chat #plantilla .Nombre").html(objeto.Nombre);
        $(".chat #plantilla .Mensaje").html(objeto.Mensaje);
        $(".chat #plantilla .Tiempo").html(objeto.Fecha);
        $(".chat #plantilla").attr("id", "");
      }
    });
  });
}
