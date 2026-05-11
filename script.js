document.getElementById("btnCopiar").addEventListener("click", function () {
  const email = "seu-email@exemplo.com";
  const btn = this;
  const svgPath = btn.querySelector("svg path"); // Seleciona o desenho do ícone
  const textoBtn = btn.querySelector("span");
  const textoOriginal = textoBtn.innerText;

  // Salva o estilo original para voltar depois
  const bgOriginal = btn.style.backgroundColor;
  const corOriginal = btn.style.color;
  const bordersizeOriginal = btn.style.border;
  const borderstyleOriginal = btn.style.borderStyle;
  const bordercorOriginal = btn.style.borderColor;
  const fillOriginal = svgPath.style.fill; // Salva a cor original do ícone

  navigator.clipboard
    .writeText(email)
    .then(() => {
      // 1. Muda o texto
      textoBtn.innerText = "E-mail copiado!";

      // 2. Muda o fundo e a cor do texto/ícone
      btn.style.backgroundColor = "#28a745"; // Verde (exemplo)
      btn.style.color = "#ffffff"; // Branco
      btn.style.border = "3px";
      btn.style.borderStyle = "solid";
      btn.style.borderColor = "#FFFF00";
      svgPath.style.fill = "#FFFF00"; // Exemplo: ícone amarelo

      // Volta ao estado original após 2 segundos
      setTimeout(() => {
        textoBtn.innerText = textoOriginal;
        btn.style.backgroundColor = bgOriginal;
        btn.style.color = corOriginal;
        btn.style.border = bordersizeOriginal;
        btn.style.borderStyle = borderstyleOriginal;
        btn.style.borderColor = bordercorOriginal;
        svgPath.style.fill = fillOriginal;
      }, 2000);
    })
    .catch((err) => {
      console.error("Erro ao copiar: ", err);
    });
});
