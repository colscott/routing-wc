import './common-styles.js';

export class MainMenuElement extends HTMLElement {

    connectedCallback() {
        if (!this._initialized) {
            this._initialized = true;
            this.render();
        }
    }

    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <common-style></common-style>

            <div class="ui vertical inverted menu full height">
                <div class="item">
                    <div class="header">Usage</div>
                    <div class="menu">
                        <div class="item">
                            <div class="header">Named Outlets</div>
                            <div class="menu">
                                <a class="item" href="/app/examples/named-outlet/">Named Outlets</a>
                                <a class="item" href="/app/examples/named-outlet-nested/">Named Outlets Nested</a>
                            </div>
                        </div>
                        
                        <a class="item" href="/app/examples/routers/">Routers</a>
                        <a class="item" href="/app/examples/nested-routers/">Routers</a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('main-menu', MainMenuElement);