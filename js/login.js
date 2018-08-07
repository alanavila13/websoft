var formulario = document.getElementById("hola");
function iniciar() {
  //   formulario.style.display = "";
  user = document.formLogin.user.value;
  pass = document.formLogin.pass.value;
  if (user == "mike" && pass == "1234") {
    window.location = "chat2.html";
  } else {
    alert("usuario o contraseña incorrectos");
    window.location = "admin.html";
  }
}
