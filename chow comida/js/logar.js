function logar() {
  let nomes = document.getElementById("nomes").value;
  let passwords = document.getElementById("passwords").value;
  let nuneros = document.getElementById("nuneros").value;
  let nome = localStorage.nome;
  let password = localStorage.password;
 let nunero =  localStorage.nunero;
  if (nomes === nome && passwords === password && nuneros === nunero) {
    window.open('home.html')
   //location.href = "home.html"; 
  } else {
    alert("Alguma coisa esta errada na digitalização dos dados rectifique")
  }
  
}