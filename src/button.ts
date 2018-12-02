import {brick as html} from "brick-element"
import {btn_css} from "./css/btn.css"
import {host} from "./css/mixins.css"

let mxn = html`
${[host,btn_css]}
<button ${"#-btn"}> <slot>Click Me</slot></button>

${"|*disabled*|"}
`;

customElements.define("btn-x",class extends mxn(HTMLElement){
    constructor(){
        super();
        this.ids.btn.onclick = this.onclick;
    }

    update_disabled(val:string){
        if(val === "") this.ids.btn.setAttribute("disabled","");
        else this.ids.btn.removeAttribute("disabled");
    }
    
});

