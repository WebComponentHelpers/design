!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";function r(t){throw console.log("LitRead does not accept the following ${ } as input in string literal:"),console.log(t),Error("Invalid input.")}function n(t,...e){let o;if(o={template:"",props:{},imports:[],IDs:[]},t.length<=e.length)throw Error("Improper parameter size.");if(1===t.length)return o.template=`${t[0]}`,o;let n="";return t.forEach((t,s)=>{if(n+=t,s===e.length)return;let i=e[s];if("string"==typeof i){let t=i;if(t.trim(),"#"===t[0]&&"-"===t[1])n+=` id="${t.substring(2)}" `,o.IDs.push(t.substring(2));else if("|*"===t.slice(0,2)&&"*|"===t.slice(-2)){let e=t.replace(/\s/g,"").slice(2,-2).split("|");for(let t of e)t.includes("-b")?o.props[t.replace(/\-b/g,"")]="bool":o.props[t]="string"}else n+=i}else if("object"==typeof i)if(Array.isArray(i))for(let t of i)"string"==typeof t?n+=" "+t:"object"==typeof t&&"tagName"in t&&"TEMPLATE"===t.tagName?o.imports.push(t):r(t);else"tagName"in i&&"TEMPLATE"===i.tagName?o.imports.push(i):r(i);else"number"==typeof i?n+=i.toString(10):r(i)}),o.template=n,o}function s(t,...e){let o=n(t,...e),r=document.createElement("template");return r.innerHTML=o.template,Object.defineProperty(r,"_props",o.props),Object.defineProperty(r,"_IDs",o.IDs),r}function i(t,...e){let o=n(t,...e),r=document.createElement("template");return r.innerHTML=o.template,o.imports.push(r),t=>(class extends t{static get observedAttributes(){return Object.keys(o.props)}constructor(){super(),this._props=o.props;let t,e=this.attachShadow({mode:"open"});for(let t of o.imports)e.appendChild(t.content.cloneNode(!0));t={};for(let r of o.IDs)t[r]=e.getElementById(r);this.ids=t,this.shadowRoot.qs=this.shadowRoot.querySelector,this.swr=this.shadowRoot,this.setProps()}setProps(){for(let t in this._props)Object.defineProperty(this,t,{set:e=>{this.setAttribute(t,e)},get:()=>this.getAttribute(t)})}attributeChangedCallback(t,e,o){(!(null!==o)||e!==o)&&this._props.hasOwnProperty(t)&&void 0!==this["update_"+t]&&this["update_"+t](o)}})}o.r(e);let l=customElements.define.bind(customElements),a=400,c=600,p="hsl(0, 0%, 4%)",u="hsl(0, 0%, 21%)",d="hsl(0, 0%, 41%)",m=2.5,f=2,b=1.5,h=.75,g=i`
${[s`
    <style>
    :host{
        contain: content; 
        display: inline-block;
    }
    </style>
`,s` 
<style>
  
button {
    
  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: .1rem;

  height: 3.8rem;
  padding: 0 2.0rem;

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
:host([disabled]) > button {
  background-color: ${"#e5e5e5"};
  border-color: ${"#d6d6d6"};
  color: ${"#c0c0c0"};
  cursor : not-allowed;
}
button:focus {outline:none;}  
::-moz-focus-inner {border:0;}

</style>`]}
<button ${"#-btn"}> <slot>Click Me</slot></button>

${"|*disabled*|"}
`;customElements.define("btn-x",class extends(g(HTMLElement)){constructor(){super(),this.ids.btn.onclick=this.onclick}update_disabled(t){""===t?this.ids.btn.setAttribute("disabled",""):this.ids.btn.removeAttribute("disabled")}});let y=i`
    <style>
        :host {
            contain: content; 
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1rem;
        }

        p {
            font-weight : ${c};
            color: ${u};
            line-height : 1.125;
            font-size : ${f}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;

        }
        p ${"host(:not(:last-child)){margin-bottom: 1.5rem;}"}

        :host([small]) > p {
            font-size : ${b}rem;
        }
        :host([medium]) > p {
            font-size : ${f}rem;
        }
        :host([large]) > p {
            font-size : ${m}rem;
        }
        ::slotted(strong){
            font-weight : inherit;
            color: ${p};
            font-size: ${m}rem;
        }
    </style>
    <p><slot></slot></p>
`;customElements.define("title-x",class extends(y(HTMLElement)){});let $=i`
    <style>
        :host {
            contain: content; 
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1.5rem;
        }
        p {
            font-weight : ${a};
            color: ${d};
            line-height : 1.25;
            font-size : ${f*h}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;
        }
    
        :host([small]) > p {
            font-size : ${b*h}rem;
        }
        :host([medium]) > p {
            font-size : ${f*h}rem;
        }
        :host([large]) > p {
            font-size : ${m*h}rem;
        }
        ::slotted(strong){
            font-weight : ${c};
            color: ${d};
            font-size: ${m*h}rem;
        }
    </style>
    <p><slot></slot></p>
`;l("subtitle-x",class extends($(HTMLElement)){})}]);