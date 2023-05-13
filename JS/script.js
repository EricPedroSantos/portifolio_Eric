/*---------------- Menu-Mobile---------------- */

openMenu.addEventListener('click', () => {
  menu.style.display = 'flex'

  menu.style.right = (menu.offsetWidth * -1) + 'px'
  openMenu.style.display ='none'
  
  setTimeout(() => {
    menu.style.opacity = '1'
    menu.style.right = '0'
  }, 10)
})

closeMenu.addEventListener('click', () => {
  menu.style.opacity = '0'

  menu.style.right = (menu.offsetWidth * -1 ) + 'px'

  setTimeout(() => {
    menu.removeAttribute('style');
    openMenu.removeAttribute('style')
  }, 200);
});

/*----------------Maquina--de--Escrever--Nome---------------- */

var i = 0;
var text = '';

function typeWriter() {
  if (i < text.length) {
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();


/*----------------Sobre--Mim----------------*/ 

/*----------------Projeto------------------- */


/*----------------Habilidades---------------- */
const passeMouse1 = document.querySelector(" #icone1");
const passeMouse2 = document.querySelector(" #icone2");
const passeMouse3 = document.querySelector(" #icone3");
const passeMouse4 = document.querySelector(" #icone4");
const passeMouse5 = document.querySelector(" #icone5");
const passeMouse6 = document.querySelector(" #icone6");

let passeMouse =[passeMouse1, passeMouse2, passeMouse3, passeMouse4, passeMouse5, passeMouse6]

passeMouse.forEach(passeMouse =>{
    passeMouse.addEventListener("mouseover",function(){
    let habilidadesTitulo = document.querySelector("#passeMouse");
    habilidadesTitulo.classList.add("tituloRemove");
});

passeMouse.addEventListener("mouseout",function(){
    let habilidadesTitulo = document.querySelector("#passeMouse");
    habilidadesTitulo.classList.remove("tituloRemove");
});})


/*---------Habilidades------------*/
let icones= [passeMouse1, passeMouse2, passeMouse3, passeMouse4, passeMouse5, passeMouse6]

icones.forEach(icone => {
  icone.addEventListener("mouseover", function(){
    let paragrafo = document.querySelector(`#pg${icone.id.charAt(icone.id.length-1)}`);
    paragrafo.classList.remove(`paragrafo${icone.id.charAt(icone.id.length-1)}`);
  });
  icone.addEventListener("mouseout", function(){
    let paragrafo = document.querySelector(`#pg${icone.id.charAt(icone.id.length-1)}`);
    paragrafo.classList.add(`paragrafo${icone.id.charAt(icone.id.length-1)}`);
  });
})


