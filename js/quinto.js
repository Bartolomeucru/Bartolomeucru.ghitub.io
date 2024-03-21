
    






    // Função para ativar ou desativar o reconhecimento de voz
    function toggleReconhecimento() {
      if (reconhecimentoAtivo) {
        recognition.stop();
        reconhecimentoAtivo = false;
        document.getElementById('texto').innerText = ""; // Limpa o texto quando o reconhecimento é desativado
      } else {
        recognition.start();
        reconhecimentoAtivo = true;
      }
    }

    // Função para configurar e iniciar o reconhecimento de voz
    function iniciarReconhecimento() {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if ('SpeechRecognition' in window) {
        recognition = new window.SpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.onresult = function(event) {
          const resultado = event.results[0][0].transcript;
          document.getElementById('texto').innerText = resultado;
        }
      } else {
        alert("Reconhecimento de voz não suportado neste navegador.");
        console.log("Reconhecimento de voz não suportado neste navegador.");

      }
    }

    // Inicia o reconhecimento de voz quando a página carrega
    iniciarReconhecimento();
    //segund
function segu() {
        const segu1 = document.getElementById('segu3').innerText;
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(segu1);
            window.speechSynthesis.speak(speech);
        } else {
            console.log("Síntese de voz não suportada neste navegador.");
        }
    }

    // Função para parar a leitura do texto
    function segu4() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }
