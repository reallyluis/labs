import { PageTitleTemplate } from './_templates.js';

class PageTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(PageTitleTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
  }
}

export default PageTitle;
