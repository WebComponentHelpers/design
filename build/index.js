!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";function n(t){throw console.log("LitRead does not accept the following ${ } as input in string literal:"),console.log(t),Error("Invalid input.")}function r(t,...e){let o;if(o={template:"",props:{},imports:[],IDs:[]},t.length<=e.length)throw Error("Improper parameter size.");if(1===t.length)return o.template=`${t[0]}`,o;let r="";return t.forEach((t,s)=>{if(r+=t,s===e.length)return;let i=e[s];if("string"==typeof i){let t=i;if(t.trim(),"#"===t[0]&&"-"===t[1])r+=` id="${t.substring(2)}" `,o.IDs.push(t.substring(2));else if("|*"===t.slice(0,2)&&"*|"===t.slice(-2)){let e=t.replace(/\s/g,"").slice(2,-2).split("|");for(let t of e)t.includes("-b")?o.props[t.replace(/\-b/g,"")]="bool":o.props[t]="string"}else r+=i}else if("object"==typeof i)if(Array.isArray(i))for(let t of i)"string"==typeof t?r+=" "+t:"object"==typeof t&&"tagName"in t&&"TEMPLATE"===t.tagName?o.imports.push(t):n(t);else"tagName"in i&&"TEMPLATE"===i.tagName?o.imports.push(i):n(i);else"number"==typeof i?r+=i.toString(10):n(i)}),o.template=r,o}function s(t,...e){let o=r(t,...e),n=document.createElement("template");return n.innerHTML=o.template,Object.defineProperty(n,"_props",o.props),Object.defineProperty(n,"_IDs",o.IDs),n}function i(t,...e){let o=r(t,...e),n=document.createElement("template");return n.innerHTML=o.template,o.imports.push(n),(t,e)=>(class extends t{static get observedAttributes(){return Object.keys(o.props)}constructor(){super(),this._props=o.props;let t,n=e?e.shadowRoot:{mode:"open",delegatesFocus:!1},r=this.attachShadow(n);for(let t of o.imports)r.appendChild(t.content.cloneNode(!0));t={};for(let e of o.IDs)t[e]=r.getElementById(e);this.ids=t,this.shadowRoot.qs=this.shadowRoot.querySelector,this.swr=this.shadowRoot,this.setProps()}setProps(){for(let t in this._props)Object.defineProperty(this,t,{set:e=>{this.setAttribute(t,e)},get:()=>this.getAttribute(t)})}attributeChangedCallback(t,e,o){(!(null!==o)||e!==o)&&this._props.hasOwnProperty(t)&&void 0!==this["update_"+t]&&this["update_"+t](o)}})}o.r(e);let l=customElements.define.bind(customElements),d=400,a=600,c="hsl(0, 0%, 4%)",p="hsl(0, 0%, 21%)",u="hsl(0, 0%, 41%)",b="hsl(0, 0%, 86%)",h="hsl(0, 0%, 100%)",m="hsl(171, 100%, 41%)",f="hsl(217, 71%,  53%)",g=2.5,x=2,$=1.5,y=1.25,w=.75,v="4px",k=s`
    <style>
        :host{
            contain: content; 
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
`,E=s`
    <style>
    :host{
        margin : 0;
        box-sizing : border-box;

        background-color: ${h};
        border-radius: ${"6px"};
        box-shadow: 0 2px 3px black;
        display: block;
        padding: 1.25rem;
        /*width: 500px;*/
    }
    </style>
`,z=i`
${[s`
    <style>
    :host{
        contain: content; 
    }
    </style>
`,s` 
<style>
  
button {
  margin : 0;
  box-sizing : border-box;

  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: .1rem;

  padding: 0.8rem;

  background-color: ${"#00d1b2"};
  border: 1px solid transparent;
  border-radius: .4rem;
  color: #fff;
  cursor: pointer;

  -moz-appearance: none;
  -webkit-appearance: none;
}

:host(:hover) > button {
  background-color: ${"#00c4a7"};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

:host(:active) > button {
  background-color: ${"#00b89c"};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

:host([white]) > button{
  background-color: ${h};
  color: ${u};
  border-color: ${b};
  outline: 0;
}
:host([white]:hover) > button {
  border-color: ${u};
}
:host([white]:active) > button {
  color: ${p};
}

:host([focus]) > button:focus {
  ${`\n    border-color: ${f};\n    box-shadow : 0 0 0 0.175em rgba(50, 115, 220, 0.25);\n`}
  color : ${f}
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
`;class M extends(z(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!0}})){constructor(){super(),this.ids.btn.onclick=this.onclick,this.ids.btn.onblur=this.onblur,this.ids.btn.onfocus=this.onfocus}update_disabled(t){""===t?this.ids.btn.setAttribute("disabled",""):this.ids.btn.removeAttribute("disabled")}}customElements.define("btn-x",M);let T=s`
    <style>
        button {
            background-color: ${p};
            color : ${b};
            border-radius: ${v};
            width : 25px;
            height: 25px;
            padding : 0px;
            margin: 0px;
            padding-bottom : 0.2rem;
            vertical-align:center;
            letter-spacing: 0rem;
          

        }
`;l("delete-x",class extends M{constructor(){super(),this.ids.btn.innerHTML="x",this.swr.appendChild(T.content.cloneNode(!0))}});let j=i`
    <style>
        :host {
            contain: content; 
            display: block;
                
            margin : 0;
            padding :0;  
            box-sizing : border-box;

            font-weight : ${a};
            color: ${p};
            line-height : 1.125;
            font-size : ${x}rem;
            word-break: break-word;

        }
        ${"host(:not(:last-child)){margin-bottom: 1.5rem;}"}
        
        :host([bottom-margin]) {
            margin-bottom: 1rem;
        }
        :host([top-margin]) {
            margin-top : 1rem;
        }

        :host([small]) {
            font-size : ${y}rem;
        }
        :host([medium]) {
            font-size : ${x}rem;
        }
        :host([large]) {
            font-size : ${g}rem;
        }
        :host([inverted]) {
            filter : invert(1);
        }
        ::slotted(strong){
            font-weight : inherit;
            color: ${c};
            font-size: ${g}rem;
        }
    </style>
    <slot></slot>
`;customElements.define("title-x",class extends(j(HTMLElement)){});let _=i`
    <style>
        :host {
            contain: content; 
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1.5rem;
        }
        p {
            font-weight : ${d};
            color: ${u};
            line-height : 1.25;
            font-size : ${x*w}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;
        }
    
        :host([small]) > p {
            font-size : ${$*w}rem;
        }
        :host([medium]) > p {
            font-size : ${x*w}rem;
        }
        :host([large]) > p {
            font-size : ${g*w}rem;
        }
        ::slotted(strong){
            font-weight : ${a};
            color: ${u};
            font-size: ${g*w}rem;
        }
    </style>
    <p><slot></slot></p>
`;l("subtitle-x",class extends(_(HTMLElement)){});let L=i`
    ${E}
    <slot></slot>
`;l("box-x",class extends(L(HTMLElement)){});let P=i`
    ${E}
    <style>
        :host{
            
            padding : 0;
            overflow : hidden;
        }
        div { 
            display: flex;
            flex-direction : row;
            background-color: ${u};
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
`;l("message-x",class extends(P(HTMLElement)){});let O=i` 
    ${k}
    
    <style>
        :host{
            display:block;
            background-color: ${h};
            border: 1px solid;
            border-color: ${b};
            border-radius: ${v};
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
            background-color: ${f};
            color: ${h};
        }
        ::slotted(a:active){
            background-color: ${f};
            color: ${m};
        }
        
        
    </style>
    <div ${"#-box"}>
        <slot></slot>
    </div>
`;l("menu-x",class extends(O(HTMLElement)){});let H=i`
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

        <btn-x white focus ${"#-btn"}> <slot> I droppo  ;)</slot></btn-x>
        <menu-x ${"#-menu"}> <slot name="menu"> </slot> </menu-x>
    
`;l("drop-x",class extends(H(HTMLElement)){constructor(){super(),this.ids.btn.onfocus=this.drop.bind(this),this.ids.btn.onblur=this.undrop.bind(this)}drop(){this.ids.menu.style.display="block"}undrop(){this.ids.menu.style.display="none"}})}]);