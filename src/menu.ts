import {brick as html, templateme, dfn} from "brick-element"
import {normalize} from "./css/mixins.css"
import {colors, radius} from "./css/configs.css"
import "./button"


let mxn = html` 
    ${normalize}
    
    <style>
        :host{
            display:block;
            background-color: ${colors.white};
            border: 1px solid;
            border-color: ${colors.grey_lighter};
            border-radius: ${radius.medium};
            min-width: 10rem;
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
    <style>

        menu-x{
            margin-top : 4px;
            display: none;
            position: absolute;
            left:0%;
            z-index: 20;
        }
        menu-x[hidden]{
            display : none;
        }
        btn-x{
            display:inline;
        }
        :host{
            display:inline;
            position: relative;
            outline:none;
        }
        :host(:focus) {
            outline:none;
        }
        :host(:active){
            outline:none;
        }
    </style>

        <btn-x white focus ${'#-btn'}> <slot> I droppo  ;)</slot></btn-x>
        <menu-x ${'#-menu'}> <slot name="menu"> </slot> </menu-x>
    
`;

dfn("drop-x", class extends drop_mxn(HTMLElement){

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
});