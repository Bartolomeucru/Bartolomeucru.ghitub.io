function downloadPDF() {
  var pdfSrc = document.getElementById('pdfEmbed').src;
  var fileName = pdfSrc.split('/').pop(); // Extrai o nome do arquivo do URL

  // Cria um link temporário
  var link = document.createElement('a');
  link.href = pdfSrc;
  link.download = fileName;

  // Adiciona o link ao documento e simula um clique nele
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}