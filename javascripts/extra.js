document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copy-button");

  if (copyButton) {
      copyButton.addEventListener("click", function (event) {
          event.preventDefault(); // Evita que el botón recargue la página

          navigator.clipboard.writeText("play.minexilon.com").then(() => {
              alert("¡Texto copiado al portapapeles!");
          }).catch(err => {
              console.error("Error al copiar: ", err);
          });
      });
  }
});