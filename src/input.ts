import {brick as html, dfn} from "brick-element"
import {colors, radius} from './css/configs.css'
import {normalize,focus_mxn} from './css/mixins.css'
 
let mxn = html`
    ${normalize}
    <style>
        :host{
            border-width:1px;
            border-style:solid;
            background-color:${colors.white};
            border-color:${colors.grey_lighter};
            border-radius:${radius.large};
            display:inline-flex;
            flex-direction:row;
        }
        :host([focused=""]){
            ${focus_mxn}
        }
        input{
            margin:0px;
            color:${colors.grey_darker};
            background-color:${colors.white};
            border-radius:${radius.large};
            /*height:2.25em;*/
            padding:0.5em;
            border-style:none;
            font-family: inherit; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            overflow: visible;
        }
        input:focus{
            outline:none;
            border-style:none;
        }
        div[before=""]{
            padding:0.5em;
            padding-right:0em;
        }
        div[after=""]{
            padding:0.5em;
            padding-left:0em;
        }
        ::slotted(*){
            color:${colors.grey_darker};
        }
    </style>

    <div before> <slot name="before"> test </slot> </div>
    <input type="text" ${'#-inpt'} >
    <div after> <slot name="after"></slot> </div>
    ${'|*placeholder*|'}
`;

dfn('input-x', class extends mxn(HTMLElement){
    ids:{[key:string]:any}
    constructor(){
        super();
        this.ids.inpt.onfocus =  this.focuseme.bind(this);
        this.ids.inpt.onblur = this.blurme.bind(this);
    }
    
    focuseme(){
        this.setAttribute("focused","") ;
        if(this.onfocus) this.onfocus();
    }
    blurme(){
        this.removeAttribute("focused");
        if(this.onblur)this.onblur;
        if(this.validate) this.validate();
    }
    get value(){

        // FIXME add escaping 
        return this.ids.inpt.value ;   
    }

    set value( val){
        // FIXME add escaping 
        this.ids.inpt.value = val;
    }
    update_placeholder( val:string){
        this.ids.inpt.placeholder = val;
    }
})
