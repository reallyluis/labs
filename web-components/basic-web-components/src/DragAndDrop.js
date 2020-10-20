import { DragElementTemplate, DropContainerTemplate } from './_templates.js';

class Draggable extends HTMLElement {
  constructor() {
    super();

    this.setAttribute('isMouseDown', false);
    this.setAttribute('mouseX', 0);
    this.setAttribute('mouseY', 0);
    this.setAttribute('elementX', 0);
    this.setAttribute('elementY', 0);

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(DragElementTemplate.content.cloneNode(true));

    const element = this.shadowRoot.querySelector('div');
    element.insertAdjacentHTML('afterbegin', this.innerHTML);
    element.addEventListener('mousedown', this.onMouseDown);
    document.getElementsByTagName('body')[0].addEventListener('mousemove', (event) => this.onMouseMove(event, element));
    document.getElementsByTagName('body')[0].addEventListener('mouseup', (event) => this.onMouseUp(event, element));
  }

  disconnectedCallback() {
    document.getElementsByTagName('body')[0].removeEventListener('mousemove');
    document.getElementsByTagName('body')[0].removeEventListener('mouseup');
  }

  onMouseDown(event) {
    const element = event.srcElement;
    element.style.cursor = 'grab';

    this.setAttribute('mouseX', event.clientX);
    this.setAttribute('mouseY', event.clientY);
    this.setAttribute('isMouseDown', true);
  }

  onMouseMove(event, element) {
    const isMouseDown = element.getAttribute('isMouseDown');

    if (isMouseDown == 'true') {
      const mouseX = parseInt(element.getAttribute('mouseX'), 10) || 0;
      const mouseY = parseInt(element.getAttribute('mouseY'), 10) || 0;
      const elementX = parseInt(element.getAttribute('elementX'), 10) || 0;
      const elementY = parseInt(element.getAttribute('elementY'), 10) || 0;
      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      element.style.left = elementX + deltaX + element.clientWidth/2 + 'px';
      element.style.top = elementY + deltaY + element.clientHeight/2 + 'px';
    }
  }

  onMouseUp(event, element) {
    const isMouseDown = element.getAttribute('isMouseDown');

    if (isMouseDown == 'true') {
      element.style.cursor = 'unset';

      const elementX = parseInt(element.style.left, 10) || 0;
      const elementY = parseInt(element.style.top, 10) || 0;

      element.setAttribute('isMouseDown', false);
      element.setAttribute('elementX', elementX);
      element.setAttribute('elementY', elementY);
    }
  }
}

class Droppable extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(DropContainerTemplate.content.cloneNode(true));

    const element = this.shadowRoot.querySelector('div');
    element.insertAdjacentHTML('afterbegin', this.innerHTML);
    element.addEventListener('mouseover', this.onMouseOver);
    element.addEventListener('mouseout', this.onMouseOut);
  }

  onMouseOver(event) {
    const element = event.srcElement;
    element.style.cursor = 'copy';
  }

  onMouseOut(event) {
    const element = event.srcElement;
    element.style.cursor = 'unset';
  }
}

export {
  Draggable,
  Droppable,
};