console.log('Hello World!');
function entrar() {
// window.open('entra1.html')
 location.href = "entra1.html" 
}
function enter(){
 const nome = document.getElementById("nome")
 const password = document.getElementById("password")
 const nunero = document.getElementById("nunero")
 if (nome.value === "Bartolomeu" && password.value === "123" && nunero.value === "17") {
   location.href = "home.html";


 }
}
function cadastrar() {
 // window.open('logar.html');
  location.href = "logar.html";
}