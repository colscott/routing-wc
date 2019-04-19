class ContenNestedViewtwoExample extends HTMLElement {
    
    connectedCallback() {
        this.innerHTML = `
        <p>
            <h2>Nested View Two</h2>
            Example of a nested routing. The full URL most be supplied that includes any parent routes.<br>
            In this case:<br>
            Bae URL -> /routing-wc/examples/router/
            Parent route -> /nested<br>
            Child route -> /viewtwo<br>
            So the link was -> /routing-wc/examples/router/nested/viewtwo
        </p>
        `;
    }
    
    constructor() {
        super();
    }
}

customElements.define('content-nested-viewtwo-example', ContenNestedViewtwoExample);