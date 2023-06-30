let modal = document.querySelector(".cardModal")
let btn = document.getElementById("AbrirModal")
let fecharModal = document.querySelector(".close")

btn.addEventListener("click",Abrir)

function Abrir()
{
    modal.style.display ="block"
}

fecharModal.addEventListener("click", Fechar);
function Fechar()
{
    modal.style.display ="none"
}
// Função para fechar o modal clicando fora dele
function fecharCliqueFora(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  
  // Adiciona o evento de clique fora do modal
  window.addEventListener("click", fecharCliqueFora);