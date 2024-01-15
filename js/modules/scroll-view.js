export default function initScrollView(){
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
