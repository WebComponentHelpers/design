!function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function r(e){throw console.log("LitRead does not accept the following ${ } as input in string literal:"),console.log(e),Error("Invalid input.")}function s(e,...t){let o;if(o={template:"",props:{},imports:[],IDs:[]},e.length<=t.length)throw Error("Improper parameter size.");if(1===e.length)return o.template=""+e[0],o;let s="";return e.forEach((e,n)=>{if(s+=e,n===t.length)return;let i=t[n];if("string"==typeof i){let e=i;if(e.trim(),"#"===e[0]&&"-"===e[1])s+=` id="${e.substring(2)}" `,o.IDs.push(e.substring(2));else if("|*"===e.slice(0,2)&&"*|"===e.slice(-2)){let t=e.replace(/\s/g,"").slice(2,-2).split("|");for(let e of t)e.includes("-b")?o.props[e.replace(/\-b/g,"")]="bool":o.props[e]="string"}else s+=i}else if("object"==typeof i)if(Array.isArray(i))for(let e of i)"string"==typeof e?s+=" "+e:"object"==typeof e&&"tagName"in e&&"TEMPLATE"===e.tagName?o.imports.push(e):r(e);else if("tagName"in i&&"TEMPLATE"===i.tagName){if(o.imports.push(i),i.hasOwnProperty("_props")&&null!=i._props&&null!=i._props)for(let e in i._props)this._props[e]=i._props[e];i.hasOwnProperty("_IDs")&&null!=i._IDs&&null!=i._IDs&&o.IDs.concat(i._IDs)}else r(i);else"number"==typeof i?s+=i.toString(10):r(i)}),o.template=s,o}function n(e,...t){let o=s(e,...t),r=document.createElement("template");return r.innerHTML=o.template,Object.defineProperty(r,"_props",o.props),Object.defineProperty(r,"_IDs",o.IDs),r}function i(e,...t){let o=s(e,...t),r=document.createElement("template");return r.innerHTML=o.template,o.imports.push(r),function(e,t){return class extends e{static get observedAttributes(){let e=[];return super.observedAttributes&&(e=super.observedAttributes),e.concat(Object.keys(o.props))}constructor(...e){super(),this._props||(this._props={});for(let e in o.props)this._props[e]=o.props[e];let r=t&&t.shadowRoot?t.shadowRoot:{mode:"open",delegatesFocus:!1},s=t&&t.inherit?this.shadowRoot:this.attachShadow(r);for(let e of o.imports)s.appendChild(e.content.cloneNode(!0));this.ids||(this.ids={});for(let e of o.IDs)this.ids[e]=s.getElementById(e);this.qs=this.shadowRoot.querySelector,this.swr=this.shadowRoot,this.setProps(),this.acquireSlots(),this.setRootToChilds()}setProps(){for(let e in this._props)this.hasOwnProperty(e)||Object.defineProperty(this,e,{set:t=>{this.setAttribute(e,t)},get:()=>this.getAttribute(e)})}acquireSlots(){let e=this.swr.querySelectorAll("slot");for(let t of e)if(t.hasAttribute("type")){let e=t.getAttribute("name"),o=t.getAttribute("type");if(""===e||""===o||null===e||this.hasOwnProperty(e))continue;Object.defineProperty(this,e,{set:t=>{let r=this.querySelectorAll(`[slot=${e}]`);for(let e of r)this.removeChild(e);let s=[];Array.isArray(t)?s=t:s.push(t);for(let t of s){let r=document.createElement(o);r.setAttribute("slot",e);for(let e in t)void 0!==r[e]?r[e]=t[e]:console.log("EROR: key '",e,"' not assignable to class ",r.tagName);this.appendChild(r)}},get:()=>{let t=this.querySelectorAll(`[slot=${e}]`);return 1===t.length?t[0]:t}})}}ingestData(e){for(let t in e)void 0!==this[t]?this[t]=e[t]:console.log("EROR: key '",t,"' not assignable to class ",this.className)}setRootToChilds(){let e=this.swr.querySelectorAll("*");for(let t of e)t.root=this}attributeChangedCallback(e,t,o){(!(null!==o)||t!==o)&&this._props.hasOwnProperty(e)&&void 0!==this["update_"+e]&&this["update_"+e](o)}}}}o.r(t);let l=customElements.define.bind(customElements);function d(e,t){customElements.get(e)||customElements.define(e,t)}let a=400,c=600,p="hsl(0, 0%, 4%)",u="hsl(0, 0%, 21%)",h="hsl(0, 0%, 41%)",b="hsl(0, 0%, 86%)",f="hsl(0, 0%, 100%)",m="hsl(171, 100%, 41%)",g="hsl(217, 71%,  53%)",x=2.5,v=2,$=1.25,y=1,w=.75,k="4px",E="6px",_=n`
    <style>
        :host{
            /*contain: content;*/
            box-sizing : border-box;
        }
        p,div{
            box-sizing : border-box;
        }
        p{
            margin:0;
            padding:0;
        }
        b,
        strong {
            font-weight: bolder;
        }
        a {
            background-color: transparent;
          }
    <style>
`,z=n`
    <style>
    :host{
        margin : 0;
        box-sizing : border-box;

        background-color: var(--bkg-color,${f});
        border-radius: ${E};
        box-shadow: 0 2px 3px rgba(0,0,0, 0.1), 0 0 0 1px rgba(0,0,0, 0.1);
        display: block;
        padding: var(--padding-box,1.25rem);
    }
    </style>
`,A=`\n    border-color: var(--focused-border-color,${g});\n    box-shadow : var(--focused-box-shadow, 0 0 0 0.175em rgba(50, 115, 220, 0.25));\n    color : var(--focus-color,${g});\n`,L=`\n    border-width:1px;\n    border-style:solid;\n    background-color:${f};\n    border-color:${b};\n    border-radius:var(--radius,${E});\n    z-index:0;\n    box-shadow:  var(--unfocused-box-shadow, none);\n    padding : var(--padding-box,0.5em);\n`,T=i`
${[n`
    <style>
    :host{
        /*contain: content; */
        box-sizing : border-box;
    }
    </style>
`,n` 
<style>
:host{
  display:inline-block;
}
button {
  margin : 0;
  box-sizing : border-box;

  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: .1rem;

  padding: var(--padding,0.8rem);

  background-color:  var(--bg-color, ${"#00d1b2"});
  border: 1px solid transparent;
  border: var(--border, 1px solid transparent);
  border-bottom: var(--border-bottom, 1px solid transparent);
  border-radius: var(--radious, .4rem);
  color: var(--color,#fff);
  cursor: pointer;
  box-shadow:  var(--unfocused-box-shadow,none);

  width:  inherit; /*var(--width,inherit);*/
  height: inherit;

  
  -moz-appearance: none;
  -webkit-appearance: none;
}

:host(:not([simple]):hover) > button {
  background-color: ${"#00c4a7"};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

:host(:not([simple]):active) > button {
  background-color: ${"#00b89c"};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

:host([white]) > button{
  background-color: var(--override-white, ${f});
  color: ${h};
  border-color: ${b};
  outline: 0;
}
:host(:not([simple])[white]:hover) > button {
  background-color: var(--override-white, ${f});
  border-color: ${h};
  color: ${h};
}
:host(:not([simple])[white]:active) > button {
  background-color: var(--override-white, ${f});
  color: ${u};
  border-color: ${h};
}

:host([focus]) > button:focus {
  ${A}
}
:host(:not([simple])[focus]) > button:focus {
  ${A}
}

:host(:not([simple])[white][focus]) > button:focus {
  ${A}
}

:host([disabled]) > button {
  background-color: ${"#e5e5e5"};
  border-color: ${"#d6d6d6"};
  color: ${"#c0c0c0"};
  cursor : not-allowed;
}

:host([disabled]:active) > button {
  background-color: ${"#e5e5e5"};
  border-color: ${"#d6d6d6"};
  color: ${"#c0c0c0"};
  cursor : not-allowed;
}

:host([disabled]:hover) > button {
  background-color: ${"#e5e5e5"};
  border-color: ${"#d6d6d6"};
  color: ${"#c0c0c0"};
  cursor : not-allowed;
}
:host(:focus) {
            outline:none;
        }
        :host(:active){
            outline:none;
        }

button:focus {outline:none;}
::-moz-focus-inner {border:0;}

</style>`]}
<button ${"#-btn"}> <slot>Click Me</slot></button>

${"|*disabled*|"}
`;class M extends(T(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!0}})){constructor(){super(),this.ids.btn.onclick=this.onclick,this.ids.btn.onblur=this.onblur,this.ids.btn.onfocus=this.onfocus}update_disabled(e){""===e?this.ids.btn.setAttribute("disabled",""):this.ids.btn.removeAttribute("disabled")}}let O=n`
    <style>
        button {
            background-color: ${u};
            color : ${b};
            border-radius: ${k};
            width : 25px;
            height: 25px;
            padding : 0px;
            margin: 0px;
            padding-bottom : 0.2rem;
            vertical-align:center;
            letter-spacing: 0rem;
          

        }
`;let P=i`
    <style>
        :host {
            display: block;
                
            margin : 0;
            padding :0;  
            box-sizing : border-box;

            font-weight : ${c};
            color: var(--fontColor,${h});
            line-height : 1.125;
            font-size : ${v}rem;
            word-break: break-word;

        }
        ${"host(:not(:last-child)){margin-bottom: 1.5rem;}"}
        
        :host([bottom-margin]) {
            margin-bottom: 1rem;
        }
        :host([top-margin]) {
            margin-top : 1rem;
        }
        :host([smallest]){
            font-size : ${y}rem;
        }
        :host([small]) {
            font-size : ${$}rem;
        }
        :host([medium]) {
            font-size : ${v}rem;
        }
        :host([large]) {
            font-size : ${x}rem;
        }
        :host([inverted]) {
            filter : invert(1);
        }
        ::slotted(strong){
            font-weight : inherit;
            color: ${p};
            font-size: ${x}rem;
        }
        </style>
    <slot></slot>
`;class j extends(P(HTMLElement)){}let I=i`
    <style>
        :host {
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1.5rem;
        }
        
        p {
            font-weight : ${a};
            color: var(--fontColor,${h});
            line-height : 1.25;
            font-size : ${v*w}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;
        }

        
        :host([smallest]) > p {
            font-size : ${y*w}rem;
        }
        :host([small]) > p {
            font-size : ${$*w}rem;
        }
        :host([medium]) > p {
            font-size : ${v*w}rem;
        }
        :host([large]) > p {
            font-size : ${x*w}rem;
        }
        :host([zero-margin]) > p {
            margin: 0;
        }
        ::slotted(strong){
            font-weight : ${c};
            color: ${h};
            font-size: ${x*w}rem;
        }
    </style>
    <p><slot></slot></p>
`;class R extends(I(HTMLElement)){}let S=i`
    ${z}
    <slot></slot>
`;class C extends(S(HTMLElement)){}let H=i`
    ${z}
    <style>
        :host{
            
            padding : 0;
            overflow : hidden;
        }
        div { 
            display: flex;
            flex-direction : row;
            background-color: ${h};
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
`;class D extends(H(HTMLElement)){}let N=i`
    ${_}
    <style>
        :host{
            ${L}
            display: inline-flex;
            flex-direction: row;
        }
        ::slotted(*):focus {
            outline:none;
            /*border-style:none;*/
            border:2px solid blue;
        }

        :host([focused]){
            ${A}
            
        }
      
    </style>
    <slot></slot>
`;class q extends(N(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!1}})){connectedCallback(){for(var e of(this.addEventListener("focus",this.foc),this.addEventListener("blur",this.blu),this.childNodes))e.addEventListener("focus",this.foc.bind(this)),e.addEventListener("blur",this.blu.bind(this))}foc(){this.setAttribute("focused","")}blu(){this.removeAttribute("focused")}}let F=i` 
    ${_}
    
    <style>
        :host{
            display:flex;
            flex-direction: column;
            background-color: var(--bg-color,${f});
            border: var(--border,1px solid);
            border-color: var(--border-color, ${b});
            border-radius: var(--border-radius, ${k});
            min-width: 10rem;
            box-shadow: ${"0 2px 3px rgba(0,0,0, 0.1), 0 0 0 1px rgba(0,0,0, 0.1)"};
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
            background-color: ${g};
            color: ${f};
        }
        ::slotted(a:active){
            background-color: ${g};
            color: ${m};
        }
        
        
    </style>
    <div ${"#-box"}>
        <slot></slot>
    </div>
`;class B extends(F(HTMLElement)){}let G=i`
    ${_}

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

        <button-x white focus ${"#-btn"}> <slot > I droppo  ;)</slot></button-x>
        <menu-x ${"#-menu"}> <slot name="menu"> </slot> </menu-x>
    
`;class J extends(G(HTMLElement,{shadowRoot:{delegatesFocus:!0,mode:"open"}})){constructor(){super(),d("button-x",M),d("menu-x",B),this.ids.btn.onfocus=this.drop.bind(this),this.ids.btn.onblur=this.undrop.bind(this)}drop(){this.ids.menu.style.display="block"}undrop(){this.ids.menu.style.display="none"}}let K=i`
    <style>
        menu-x{
            margin-top: 0px;
            --bg-color:${f};
            --border:0px;
            --border-radius:0px ${k} ${k} ${k} ; 
        }
        button-x {
            --bg-color:${g};
            --radious: ${k} ${k} 0 0;
            --color: ${u};
            --focus-border-color:${h};
            --focus-color:${f};
            --focus-shadow:0;
            --border: 0px;
            --border-bottom: 8px solid transparent;

        }
    </style>

`;class Q extends(K(J,{inherit:!0})){constructor(){super(),this.ids.btn.removeAttribute("white"),this.ids.btn.setAttribute("simple","")}}let U=i`
    ${_}
    <style>
        :host{
            --padding-box: 0px;
            ${L} 
            display:inline-flex;
            flex-direction:row;
        }
      
        :host([focused=""]){
            ${A}
        }
      
        input{
            margin:0px;
            color:${u};
            background-color:${f};
            border-radius:var(--radius,${E});
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
            color:${u};
        }
    </style>

    <div ${"#-before"} before> <slot name="before"> </slot> </div>
    <input type="text" ${"#-inpt"} >
    <div ${"#-after"} after> <slot name="after"></slot> </div>

    ${"|*placeholder*|"}
`;class V extends(U(HTMLElement)){constructor(){super(),this.ids.inpt.onfocus=this._focuseme.bind(this),this.ids.inpt.onblur=this._blurme.bind(this),this.ids.inpt.onkeypress=this._onkeypress.bind(this),this.ids.inpt.addEventListener("change",this._change_event.bind(this))}_change_event(e){let t=new Event("change",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_focuseme(){this.setAttribute("focused","")}_blurme(){this.removeAttribute("focused"),this.validate&&this.validate()}focus(){this.ids.inpt.focus()}_onkeypress(e){if(13===e.keyCode){let e=new Event("enter-pressed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}get value(){return this.ids.inpt.value}set value(e){this.ids.inpt.value=e}update_placeholder(e){this.ids.inpt.placeholder=e}}let W=i`
    ${_}
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

    <input type="checkbox" name="chbox" ${"#-inpt"}>
    <label for="chbox"><slot></slot></label>
    
`;class X extends(W(HTMLElement)){get value(){return this.ids.inpt.checked}set value(e){this.ids.inpt.checked=e}}let Y=i`

    <style>
        :host{
            display:flex;
            flex-direction:row;
            width:100%;
            justify-content:space-between;
            background-color: ${g};
            /*padding: 0.5rem;*/
            align-items:center;
            padding-left:0.5rem;
            padding-right:0.5rem;
            overflow:visible;
        }
        #left::slotted(*){
            flex:none;
            overflow:visible;

        }
        #center::slotted(*){
            flex:none;
            overflow:visible;

        }
        #right::slotted(*){
            flex:none;
            overflow:visible;

        }
        span{
            overflow:visible;

        }
     
    </style>

    <slot id="left" name="left"></slot>
    <span>
        <slot id="center" name="center"></slot>
    </span>
    <slot id="right" name="right"></slot>
`;class Z extends(Y(HTMLElement)){}customElements.define("button-x",M),l("delete-x",class extends M{constructor(){super(),this.ids.btn.innerHTML="x",this.swr.appendChild(O.content.cloneNode(!0))}}),l("title-x",j),l("subtitle-x",R),l("box-x",C),l("focus-box",q),l("message-x",D),l("menu-x",B),l("drop-x",J),l("smart-tag",Q),l("input-x",V),l("checkbox-x",X),l("nav-x",Z)}]);