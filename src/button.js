import {brick as html} from "../node_modules/brick-element/build/brick.js"
import {btn_css} from "./btn.js"

let mxn = html` 
${btn_css}
<div class="btn"> ciao ciao</div>
    `;

customElements.define("btn-x",class extends mxn(HTMLElement){});
