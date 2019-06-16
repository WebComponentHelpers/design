import {brick as html, dfn} from "brick-element"
import {box_skeleton, light_box, normalize, focus_mxn} from "./css/mixins.css"
import {colors, weight, radius} from "./css/configs.css"
import "./titles"
import "./button"

let mxn = html`
    ${box_skeleton}
    <slot></slot>
`;

export class boxX extends mxn(HTMLElement){}

let mxn_mes = html`
    ${box_skeleton}
    <style>
        :host{
            
            padding : 0;
            overflow : hidden;
        }
        div { 
            display: flex;
            flex-direction : row;
            background-color: ${colors.grey_dark};
            padding :10px;
            justify-content: space-between;
        }
        p{
            margin : 0;
            padding : 20px;
        }
    </style>
    <div> 
        <title-x small inverted> 
            <slot name="title"></slot>
        </title-x>
        <delete-x></delete-x>
    </div>
    <p> <slot name="content"> </slot> </p>
`;

export class messageX extends mxn_mes(HTMLElement){}


let mxn_fbox = html`
    ${normalize}
    <style>
        :host{
            ${light_box}
            display: inline-flex;
            flex-direction: row;
        }
        ::slotted(*):focus {
            outline:none;
            /*border-style:none;*/
            border:2px solid blue;
        }

        :host([focused]){
            ${focus_mxn}
            
        }
      
    </style>
    <slot></slot>
`;

export class focusBox extends mxn_fbox(HTMLElement,{shadowRoot:{mode:'open', delegatesFocus:false}}){
    
    connectedCallback(){
        this.addEventListener("focus", this.foc);
        this.addEventListener("blur", this.blu);
        for (var node of this.childNodes){
            node.addEventListener("focus", this.foc.bind(this));
            node.addEventListener("blur", this.blu.bind(this));
        }
    }
    foc(){
        this.setAttribute("focused","");
    }
    blu(){
        this.removeAttribute("focused");
    }
}

