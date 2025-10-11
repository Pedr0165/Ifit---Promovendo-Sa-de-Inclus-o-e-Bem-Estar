function rolarPara(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const botaoModo = document.getElementById("modoBtn");
botaoModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  botaoModo.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const feedback = document.getElementById("feedback");
  feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso 💪`;
  feedback.style.color = "#0056b3";

  setTimeout(() => {
    feedback.textContent = "";
    document.querySelector("form").reset();
  }, 4000);
}
