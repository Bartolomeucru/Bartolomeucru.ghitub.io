    function mostrarSection(elemento) {
      const textoPrato = elemento.textContent.trim();
      const sections = document.querySelectorAll('#containe section');

      // Oculta todas as sections
      sections.forEach(section => {
        section.style.display = 'none';
      });

      // Mostra a section correspondente ao prato selecionado
      const sectionCorrespondente = document.getElementById(textoPrato);
      if (sectionCorrespondente) {
        sectionCorrespondente.style.display = 'block';
      }
    }
    function caregar(){
   const pizza = document.getElementById("Pizza");
   pizza.style.display = 'block';
    }
    function desativado() {
    alert("este campo ainda não está ablitado esta em desenvolvimento pedimos desculpa por isso impressas Bartolomeu!")
    }