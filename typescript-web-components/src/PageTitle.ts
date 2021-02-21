class PageTitle extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<h1>Page Title</h1>`
  }

}

customElements.define('page-title', PageTitle);