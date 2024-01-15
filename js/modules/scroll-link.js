export default function initScrollTo(){
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

