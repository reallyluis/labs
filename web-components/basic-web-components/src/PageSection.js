import { PageSectionTemplate } from './_templates.js';

class PageTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(PageSectionTemplate.content.cloneNode(true));

    this.shadowRoot.querySelector('section').insertAdjacentHTML('afterbegin', this.innerHTML);
  }
}

export default PageTitle;
