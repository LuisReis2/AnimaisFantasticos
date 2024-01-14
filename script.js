function initTab() {
  const imgs = document.querySelectorAll('[data-tab="menu"] li');
  const sections = document.querySelectorAll('[data-tab="content"] section');
  if (sections.length && imgs.length) {
    sections[0].classList.add("ativo", sections[0].dataset.anime); // ativando a primeira section para vizualização
    function ativaTab(index) {
      sections.forEach((section) => {
        section.classList.remove("ativo", section.dataset.anime);
      });
      sections[index].classList.add("ativo", sections[index].dataset.anime);
  
    }

    imgs.forEach((img, index) => {
      img.addEventListener("click", () => {
        ativaTab(index);
      });
    });
  }
}
initTab();

function initAccordion() {
  const dts = document.querySelectorAll('[data-tab="accordion"] dt');

  dts.forEach((dt, index) => {
    dt.addEventListener("click", () => {
      dt.classList.toggle("ativo");
      dt.nextElementSibling.classList.toggle("ativo");
    });
  });
}
initAccordion();

function initScrollView(){
const sections = document.querySelectorAll('[data-tab="scroll"]');
if(sections){
  window.addEventListener("scroll", showScroll);

function showScroll() {
  sections.forEach((element) => {
    if (element.getBoundingClientRect().top < 0+200) {
      element.classList.add("ativo");
    }else{
      element.classList.remove("ativo");
    }
  });
}
}
}
initScrollView()


function initScrollTo(){
  const linksInternos = document.querySelectorAll('[data-tab="menunav"] [href^="#"]');
  if(linksInternos){
    linksInternos.forEach((link)=>{
      link.addEventListener('click', (event)=>{
        event.preventDefault();
        const href = link.getAttribute('href');
        const section = document.querySelector(href)
        console.log(section)
         section.scrollIntoView({
           behavior: 'smooth',
           block: 'start'
         })
      })
    })
  }
}

initScrollTo()
