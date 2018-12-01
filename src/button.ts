import {brick as html} from "brick-element"
import {btn_css} from "./css/btn.css"

let mxn = html`
${btn_css}
<div ${"#-btn"}> <slot>Click Me</slot></div>

${"|*disabled*|"}
    `;

customElements.define("btn-x",class extends mxn(HTMLElement){
    constructor(){
        super();
        this.addEventListener("click",this._onclick);
    }
    _onclick(){ 
        if(typeof(this["onclick"]) === "function" && this.disabled !== "") this.onclick(); 
    }
    update_disabled(val:string){
        if(val === "") this.ids.btn.setAttribute("disabled","");
        else this.ids.btn.removeAttribute("disabled");
    }
});
