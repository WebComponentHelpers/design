import {brick as html, templateme, dfn} from "brick-element"
import {btn_css} from "./css/btn.css"
import {host} from "./css/mixins.css"
import {colors, radius} from "./css/configs.css"

let mxn = html`
${[host,btn_css]}
<button ${"#-btn"}> <slot>Click Me</slot></button>

${"|*disabled*|"}
`;

class buttonX extends mxn(HTMLElement){
    constructor(){
        super();
        this.ids.btn.onclick = this.onclick;
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
            border-radius: ${radius.rounded};
            width : 25px;
            height: 25px;
            padding : 0px;
            margin: 0px;
            vertical-align:top;

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

