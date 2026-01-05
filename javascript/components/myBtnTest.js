class myBtnTest extends HTMLElement {
  constructor() {
    super();

    this.builderman();
  }

  builderman() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/css/bloko.min.css">
        <button class="btn btn-info">
            <slot></slot>
        </button>
    `;
  }
}

customElements.define("bloko-btn", myBtnTest);
