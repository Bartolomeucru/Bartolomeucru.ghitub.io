function enter(){
  alert("sucesso!")
  var nome = document.getElementById("nome");
  var password = document.getElementById("password");
  var nunero = document.getElementById("nunero");
  localStorage.nome = nome.value;
  localStorage.password = password.value;
  localStorage.nunero = nunero.value;
  window.open('/home.html')
    
}