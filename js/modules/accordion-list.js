export default function initAccordion() {
  const dts = document.querySelectorAll('[data-tab="accordion"] dt');

  dts.forEach((dt, index) => {
    dt.addEventListener("click", () => {
      dt.classList.toggle("ativo");
      dt.nextElementSibling.classList.toggle("ativo");
    });
  });
}
