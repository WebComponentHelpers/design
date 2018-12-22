import {brick as html, templateme, dfn} from "brick-element"
import {btn_css} from "./css/btn.css"
import {host} from "./css/mixins.css"
import {colors, radius} from "./css/configs.css"

let mxn = html`
${[host,btn_css]}
<button ${"#-btn"}> <slot>Click Me</slot></button>

${"|*disabled*|"}
`;

class buttonX extends mxn(HTMLElement,{shadowRoot:{mode:'open',delegatesFocus:true}}){
    ids:{[key:string]:any}
    constructor(){
        super();
        this.ids.btn.onclick = this.onclick;
        this.ids.btn.onblur  = this.onblur;
        this.ids.btn.onfocus = this.onfocus;
    }

    update_disabled(val:string){
        if(val === "") this.ids.btn.setAttribute("disabled","");
        else this.ids.btn.removeAttribute("disabled");
    }
    
};

customElements.define("btn-x", buttonX);

let del_tmpl = templateme`
    <style>
        button {
            background-color: ${colors.grey_darker};
            color : ${colors.grey_lighter};
            border-radius: ${radius.medium};
            width : 25px;
            height: 25px;
            padding : 0px;
            margin: 0px;
            padding-bottom : 0.2rem;
            vertical-align:center;
            letter-spacing: 0rem;
          

        }
`;

class deleteX extends buttonX{
    constructor(){
        super();
        this.ids.btn.innerHTML = 'x';
        this.swr.appendChild(del_tmpl.content.cloneNode(true));
    }
}
dfn("delete-x", deleteX);

