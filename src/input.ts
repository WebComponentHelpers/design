import {brick as html, dfn} from "brick-element"
import {colors, radius} from './css/configs.css'
import {normalize,focus_mxn, light_box} from './css/mixins.css'
 
let mxn = html`
    ${normalize}
    <style>
        :host{
            --padding-box: 0px;
            ${light_box} 
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
            border-radius:var(--radius,${radius.large});
            /*height:2.25em;*/
            padding:var(--padding, 0.5rem);
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

    <div ${'#-before'} before> <slot name="before"> </slot> </div>
    <input type="text" ${'#-inpt'} >
    <div ${'#-after'} after> <slot name="after"></slot> </div>

    ${'|*placeholder*|'}
`;
/**
 * Input class that support to place item before and after the text,
 * via slots "before", "after".
 * @property value: reflects the value of the inner input field, can be 
 * used to get and set its value.
 */
export class inputX extends mxn(HTMLElement){
    ids:{
        [key:string]:any,
        inpt:HTMLInputElement,
        before:HTMLDivElement,
        after:HTMLDivElement
    }
    constructor(){
        super();
        this.ids.inpt.onfocus =  this._focuseme.bind(this);
        this.ids.inpt.onblur = this._blurme.bind(this);
        this.ids.inpt.onkeypress = this._onkeypress.bind(this);
        this.ids.inpt.addEventListener('change', this._change_event.bind(this));
    }
    _change_event(ev:Event){
        // dispatch again this time bubbling trough shadow
        let e = new Event("change", {bubbles:true, composed:true})
        this.dispatchEvent(e);
    }
    _focuseme(){
        this.setAttribute("focused","") ;
    }
    _blurme(){
        this.removeAttribute("focused");
        if(this.validate) this.validate();
    }

    focus(){
        this.ids.inpt.focus();
    }
    _onkeypress(ev:KeyboardEvent){
        if(ev.keyCode === 13){
            let e = new Event("enter-pressed",{bubbles:true,composed:true});
            this.dispatchEvent(e);
        }
    }
    
    get value():string{

            // FIXME add escaping 
            return this.ids.inpt.value ;   
    }
    
    set value( val:string){
            // FIXME add escaping 
            this.ids.inpt.value = val;
    }
    update_placeholder( val:string){
        this.ids.inpt.placeholder = val;
    }
}

let check = html`
    ${normalize}
    <style>
        :host{
            cursor: pointer;
            display: inline;
            overflow: visible;
        }
        input{
            cursor: pointer;
            position: relative;
            -ms-transform: scale(1.5); /* IE */
            -moz-transform: scale(1.5); /* FF */
            -webkit-transform: scale(1.5); /* Safari and Chrome */
            -o-transform: scale(1.5); /* Opera */
            transform: scale(1.5);
            margin:0.4rem;
            border-style:none;
            line-height: 1.25; /* 1 */
            overflow: visible;
        }
        label{
            font-size: inherit

        }
    </style>

    <input type="checkbox" name="chbox" ${'#-inpt'}>
    <label for="chbox"><slot></slot></label>
    
`;

export class checkboxX extends check(HTMLElement){
    ids:{[key:string]:any}

    get value(){

        // FIXME add escaping 
        return this.ids.inpt.checked ;   
    }

    set value( val){
        // FIXME add escaping 
        this.ids.inpt.checked = val;
}
}
