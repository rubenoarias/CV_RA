// Show or hide content when button is clicked-Boton en index
function objetivo() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
//Estudios
function lupa(){
    var onmouseover= void (document.getElementById('lupa').style.fontSize='3em')
    var onmouseout= void(document.getElementById('lupa').style.fontSize='1em')
}

//contacto
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const lastnameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Aquí podrías enviar los datos del formulario a través de AJAX o fetch
  console.log({
    name: nameInput.value,
    lastname: lastnameInput.value,
    email: emailInput.value
  });
});

const cancelBtn = document.querySelector('#cancel-btn');
cancelBtn.addEventListener('click', () => {
  form.reset();
});

