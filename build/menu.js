import { brick as html, ifNdef } from "brick-element";
import { normalize, shadow } from "./css/mixins.css";
import { colors, radius } from "./css/configs.css";
import "./button";
import { buttonX } from "./button";
let mxn = html ` 
    ${normalize}
    
    <style>
        :host{
            display:flex;
            flex-direction: column;
            background-color: var(--bg-color,${colors.white});
            border: var(--border,1px solid);
            border-color: var(--border-color, ${colors.grey_lighter});
            border-radius: var(--border-radius, ${radius.medium});
            min-width: 10rem;
            box-shadow: ${shadow.light};
        }

        ::slotted(a){
            /*background-color: inherit;*/
            display : block;
            font-size: 0.875rem;
            line-height: 1.5;
            padding: 0.375rem 1rem;
            color: #3273dc;
            cursor: pointer;
            text-decoration: none;
        }
        ::slotted(a){
          padding-right: 3rem;
          text-align: left;
          white-space: nowrap;
        }
        ::slotted(a:hover){
            background-color: ${colors.blue};
            color: ${colors.white};
        }
        ::slotted(a:active){
            background-color: ${colors.blue};
            color: ${colors.turquoise};
        }
        
        
    </style>
    <div ${'#-box'}>
        <slot></slot>
    </div>
`;
export class menuX extends mxn(HTMLElement) {
}
let drop_mxn = html `
    ${normalize}

    <style>
        
        menu-x{
            margin-top : 4px;
            display: none;
            position: absolute;
            left:4px;
            z-index: 20;
            min-width: var(--menu-min-width,10rem);
        }
        menu-x[hidden]{
            display : none;
        }
        button-x{
            width:inherit;
            height:inherit;
            --padding:var(--btn-padding,0.8rem);
        }
        :host{
            position: relative;
            outline:none;
            display:inline-block;
        }
        :host(:focus) {
            outline:none;
        }
        :host(:active){
            outline:none;
        }
        @media only screen and (max-width: 500px) {
            menu-x{
                width: var(--phone-width,100%);
                left:0%;
            }
            :host{
                position:static;
            }
        }

    </style>

        <button-x white focus ${'#-btn'}> <slot> I droppo  ;)</slot></button-x>
        <menu-x ${'#-menu'}> <slot name="menu"> </slot> </menu-x>
    
`;
/**
 * Drop box
 * @param "--menu-min-width" default 10rem
 * @param "--btn-padding" default 0.8rem
 * @param "--phone-width" width for small screen size, default 100%
 */
export class dropX extends drop_mxn(HTMLElement) {
    constructor() {
        super();
        ifNdef('button-x', buttonX);
        ifNdef('menu-x', menuX);
        this.ids.btn.onfocus = this.drop.bind(this);
        this.ids.btn.onblur = this.undrop.bind(this);
    }
    drop() {
        this.ids.menu.style.display = "block";
    }
    undrop() {
        this.ids.menu.style.display = "none";
    }
}
;
let mxn_tag = html `
    <style>
        menu-x{
            margin-top: 0px;
            --bg-color:${colors.white};
            --border:0px;
            --border-radius:0px ${radius.medium} ${radius.medium} ${radius.medium} ; 
        }
        button-x {
            --bg-color:${colors.blue};
            --radious: ${radius.medium} ${radius.medium} 0 0;
            --color: ${colors.grey_darker};
            --focus-border-color:${colors.grey_dark};
            --focus-color:${colors.white};
            --focus-shadow:0;
            --border: 0px;
            --border-bottom: 8px solid transparent;

        }
    </style>

`;
export class smartTag extends mxn_tag(dropX, { inherit: true }) {
    constructor() {
        super();
        this.ids.btn.removeAttribute("white");
        this.ids.btn.setAttribute("simple", "");
    }
}
;
