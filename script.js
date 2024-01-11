function initTab(){
  const imgs = document.querySelectorAll('.js-tabimg li');
const sections = document.querySelectorAll('.js-tabcontent section');
if(sections.length && imgs.length){
  sections[0].classList.add('ativo'); // ativando a primeira section para vizualização
function ativaTab(index){
  sections.forEach((section)=>{
    section.classList.remove('ativo');
  })
    sections[index].classList.add('ativo');
}

imgs.forEach((img, index)=>{
  img.addEventListener('click', ()=>{
      ativaTab(index)
  })
})
}
}
initTab()

const dts = document.querySelectorAll('.js-accordion dt');

dts.forEach((dt, index)=>{
  dt.addEventListener('click', ()=>{
     dt.classList.toggle('ativo');
     dt.nextElementSibling.classList.toggle('ativo');
  })
})