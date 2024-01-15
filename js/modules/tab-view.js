export default function initTab() {
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