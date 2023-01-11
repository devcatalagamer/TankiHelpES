window.onload = function () {
  document.body.className = "visible";
  document.onmousedown = function(){return false;}
}

document.oncontextmenu = function(){return false}

const btnAbrirModal = document.querySelector("#btn-Abrir-Modal");

const btnCerrarModal = document.querySelector("#btn-Cerrar-Modal");

const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
  modal.showModal()
});

btnCerrarModal.addEventListener("click",()=>{
  modal.closest();
});

const toggle = document.getElementById('toogleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '2s'
  }else{
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
  }
})