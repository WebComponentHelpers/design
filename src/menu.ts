import {brick as html, templateme, dfn} from "brick-element"
import {normalize, shadow} from "./css/mixins.css"
import {colors, radius} from "./css/configs.css"
import "./button"


let mxn = html` 
    ${normalize}
    
    <style>
        :host{
            display:block;
            background-color: var(--bg-color,${colors.white});
            border: var(--border,1px solid);
            border-color: var(--border-color, ${colors.grey_lighter});
            border-radius: var(--border-radius, ${radius.medium});
            min-width: 10rem;
            ${shadow}
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

dfn("menu-x",class extends mxn(HTMLElement){
    /* // if one wants to make it with ul - li
    constructor(){
        super();

        console.log(this.children.length );
        for(let i of this.children ){
            this.ids.box.appendChild(i.cloneNode(true));
        }
    }*/
});

let drop_mxn = html`
    ${normalize}

    <style>
        
        menu-x{
            margin-top : 4px;
            display: none;
            position: absolute;
            left:4px;
            z-index: 20;
        }
        menu-x[hidden]{
            display : none;
        }
        btn-x{
            display:inline;
        }
        :host{
            position: relative;
            outline:none;
            z-index: 20;
        }
        :host(:focus) {
            outline:none;
        }
        :host(:active){
            outline:none;
        }
        @media only screen and (max-width: 500px) {
            menu-x{
                width: 100%;
                left:0%;
            }
            :host{
                position:static;
            }
        }

    </style>

        <btn-x white focus ${'#-btn'}> <slot> I droppo  ;)</slot></btn-x>
        <menu-x ${'#-menu'}> <slot name="menu"> </slot> </menu-x>
    
`;

class dropX extends drop_mxn(HTMLElement){
    ids:{[key:string]:any}
    constructor(){
        super();
        this.ids.btn.onfocus = this.drop.bind(this);
        this.ids.btn.onblur  = this.undrop.bind(this);

    }

    drop(){
        this.ids.menu.style.display = "block";
    }

    undrop(){
        this.ids.menu.style.display = "none";
    }
};
dfn("drop-x",dropX);


let mxn_tag = html`
    <style>
        menu-x{
            margin-top: 0px;
            --bg-color:${colors.white};
            --border:0px;
            --border-radius:0px ${radius.medium} ${radius.medium} ${radius.medium} ; 
        }
        btn-x {
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

dfn("smart-tag", class extends mxn_tag(dropX,{inherit:true}){
    ids:{[key:string]:any}
    constructor(){
        super();
        this.ids.btn.removeAttribute("white");
        this.ids.btn.setAttribute("simple","");
    }
});