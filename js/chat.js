
    //var Nombre = prompt("Nombre: ");
    //var Correo = prompt("Correo: ");
    var Nombre = 'Jose';

    // var nombre = 'Mike'
    //Variable con acceso a datos 
    var TablaDeBaseDatos = firebase.database().ref('chat/' + Nombre);
    var ClienteDB = firebase.database().ref('chat');
    var admin = true;
    ClienteDB.limitToLast(20).on('value', function (snapshot) {

        $(".clientes").html("");
        snapshot.forEach(function (e) {
            var objeto = e.key
            $("#clientesPlantilla").clone().prependTo(".clientes");
            $('.clientes #clientesPlantilla').show(10);
            $('.clientes #clientesPlantilla .name').html(objeto);
            $('.clientes #clientesPlantilla').attr("id", "");
        });
    });
    function cargarDatos(nom) {
        Nombre = nom
        TablaDeBaseDatos = firebase.database().ref('chat/' + nom);
        TablaDeBaseDatos.limitToLast(20).on('value', function (snapshot) {

            $(".chat").html(""); // Limpiamos todo el contenido del chat

            // Leer todos los mensajes en firebase
            snapshot.forEach(function (e) {
                var objeto = e.val(); // Asignar todos los valores a un objeto

                // Validar datos nulos y agregar contenido en forma de lista etiqueta <li>
                if ((objeto.Mensaje != null) && (objeto.Nombre != null)) {
                    // Copia el contenido al template y luego lo inserta en el chat
                    $("#plantilla").clone().appendTo(".chat");
                    $('.chat #plantilla').show(10);
                    $('.chat #plantilla .Nombre').html(objeto.Nombre);
                    $('.chat #plantilla .Mensaje').html(objeto.Mensaje);
                    $('.chat #plantilla .Tiempo').html(objeto.Fecha);
                    $('.chat #plantilla').attr("id", "");
                }

            });
        });
    }

    cargarDatos(Nombre)

    function BorrarChats() {
        var BorrarDB = firebase.database().ref('chat/' + Nombre);
        BorrarDB.remove()
    }
    function ChangeAdmin() {
        admin = !admin
    }
    $('#btnEnviar').click(function () {
        var formatofecha = new Date();
        var d = formatofecha.getUTCDate();
        var m = formatofecha.getMonth() + 1;
        var y = formatofecha.getFullYear();
        var h = formatofecha.getHours();
        var min = formatofecha.getMinutes();

        Fecha = d + "/" + m + "/" + y + " " + h + ":" + min;
        //pasar todo el script a un script.js
        //hacer un login.html que contenga el script.js
        //el index.html obvio tambien
        //var user= document.
        //<input id="user"></input>
        //document.getElementById("user").textContent
        
        
        if (admin == true) { 
            TablaDeBaseDatos.push({
                Nombre: 'WebSoftMX',
                Mensaje: $("#Mensaje").val(),
                Fecha: Fecha
            });
        }
        else {
            TablaDeBaseDatos.push({
                Nombre: Nombre,
                Mensaje: $("#Mensaje").val(),
                Fecha: Fecha
            });
        }
    });

