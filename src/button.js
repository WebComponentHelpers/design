import {brick as html} from "../node_modules/brick-element/build/brick.js"
import {btn_css} from "./css/btn.js"

let mxn = html` 
${btn_css}
<div ${"#:btn"}> <slot>Click Me</slot></div>
    `;

customElements.define("btn-x",class extends mxn(HTMLElement){
    constructor(){
        super();
        this.addEventListener("click",this._onclick);
    }
    _onclick(){ 
        if(typeof(this["onclick"]) === "function") this.onclick(); 
    }
});
