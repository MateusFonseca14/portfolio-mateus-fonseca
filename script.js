document.getElementById("btnCopiar").addEventListener("click", function () {
  const email = "devmateusfonseca@gmail.com";
  const btn = this;
  const svgPath = btn.querySelector("svg path"); // Seleciona o desenho do ícone
  const textoBtn = btn.querySelector("span");
  const textoOriginal = textoBtn.innerText;

  // Salva o estilo original para voltar depois
  const bgOriginal = btn.style.backgroundColor;
  const paddingLeftOriginal = btn.style.paddingLeft;
  const paddingRightOriginal = btn.style.paddingRight;
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
      btn.style.backgroundColor = "#9072d4"; // Verde (exemplo)
      btn.style.paddingLeft = "12.1px"
      btn.style.paddingRight = "12.1px";
      btn.style.color = "#383838"; // Branco
      btn.style.border = "4px";
      btn.style.borderStyle = "solid";
      btn.style.borderColor = "#383838";
      svgPath.style.fill = "#c4c4c4"; // Exemplo: ícone amarelo

      // Volta ao estado original após 2 segundos
      setTimeout(() => {
        textoBtn.innerText = textoOriginal;
        btn.style.backgroundColor = bgOriginal;
        btn.style.paddingLeft = paddingLeftOriginal;
        btn.style.paddingRight = paddingRightOriginal;
        btn.style.color = corOriginal;
        btn.style.border = bordersizeOriginal;
        btn.style.borderStyle = borderstyleOriginal;
        btn.style.borderColor = bordercorOriginal;
        svgPath.style.fill = fillOriginal;
      }, 1500);
    })
    .catch((err) => {
      console.error("Erro ao copiar: ", err);
    });
});
