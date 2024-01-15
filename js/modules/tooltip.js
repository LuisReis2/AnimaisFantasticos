export default function tooltip(){

}
const mapa = document.querySelector('[data-tooltip]');
const Body = document.querySelector('body')

mapa.addEventListener('mouseover', onMouseOver)

function onMouseOver(event){
  const tooltipBox = criaTooltip(this);
  onMouseLeave.element = tooltipBox;
  onMouseMove.element = tooltipBox;
 
  mapa.addEventListener('mouseleave', onMouseLeave);
  mapa.addEventListener('mousemove', onMouseMove);

}

const onMouseMove = {
  element: '',
  handleEvent(event){
    this.element.style.top = event.pageY + 20 + 'px';
    this.element.style.left = event.pageX + 20 + 'px';
  }
}
const onMouseLeave = {
  element: '',
  handleEvent(){
    this.element.remove();
    mapa.removeEventListener('mousemove', onMouseMove);
    mapa.removeEventListener('mouseleave', onMouseLeave);

  }
}
function criaTooltip(element){
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label')
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  Body.appendChild(tooltipBox);

  return tooltipBox
}
