!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function o(e){throw console.log("LitRead does not accept the following ${ } as input in string literal:"),console.log(e),Error("Invalid input.")}function n(e,...t){let r;if(r={template:"",props:{},imports:[],IDs:[]},e.length<=t.length)throw Error("Improper parameter size.");if(1===e.length)return r.template=`${e[0]}`,r;let n="";return e.forEach((e,i)=>{if(n+=e,i===t.length)return;let s=t[i];if("string"==typeof s){let e=s;if(e.trim(),"#"===e[0]&&"-"===e[1])n+=` id="${e.substring(2)}" `,r.IDs.push(e.substring(2));else if("|*"===e.slice(0,2)&&"*|"===e.slice(-2)){let t=e.replace(/\s/g,"").slice(2,-2).split("|");for(let e of t)e.includes("-b")?r.props[e.replace(/\-b/g,"")]="bool":r.props[e]="string"}else n+=s}else if("object"==typeof s)if(Array.isArray(s))for(let e of s)"string"==typeof e?n+=" "+e:"object"==typeof e&&"tagName"in e&&"TEMPLATE"===e.tagName?r.imports.push(e):o(e);else"tagName"in s&&"TEMPLATE"===s.tagName?r.imports.push(s):o(s);else o(s)}),r.template=n,r}r.r(t);customElements.define;let i=function(e,...t){let r=n(e,...t),o=document.createElement("template");return o.innerHTML=r.template,r.imports.push(o),e=>(class extends e{static get observedAttributes(){return Object.keys(r.props)}constructor(){super(),this._props=r.props;let e,t=this.attachShadow({mode:"open"});for(let e of r.imports)t.appendChild(e.content.cloneNode(!0));e={};for(let o of r.IDs)e[o]=t.getElementById(o);this.ids=e,this.shadowRoot.qs=this.shadowRoot.querySelector,this.swr=this.shadowRoot,this.setProps()}setProps(){for(let e in this._props)Object.defineProperty(this,e,{set:t=>{this.setAttribute(e,t)},get:()=>this.getAttribute(e)})}attributeChangedCallback(e,t,r){(null===r||t!==r)&&this._props.hasOwnProperty(e)&&void 0!==this["update_"+e]&&this["update_"+e](r)}})}`
${function(e,...t){let r=n(e,...t),o=document.createElement("template");return o.innerHTML=r.template,Object.defineProperty(o,"_props",r.props),Object.defineProperty(o,"_IDs",r.IDs),o}` 
<style>
div {
    background-color: ${"#00d1b2"};
    border: 0.1rem solid transparent;
    border-radius: .4rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 700;
    height: 3.8rem;
    letter-spacing: .1rem;
    line-height: 3.8rem;
    padding: 0 3.0rem;
    text-align: center;
    text-decoration: none;
    /*text-transform: uppercase;*/
    white-space: nowrap;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currentl*/
}

div:hover {
  background-color: ${"#00c4a7"};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

div:active {
  background-color: ${"#00b89c"};
  border-color: transparent;
  color: #fff;
  outline: 0;
}
div[disabled]{
  background-color: ${"lightgrey"};
}


</style>`}
<div ${"#-btn"}> <slot>Click Me</slot></div>

${"|*disabled*|"}
    `;customElements.define("btn-x",class extends(i(HTMLElement)){constructor(){super(),this.addEventListener("click",this._onclick)}_onclick(){"function"==typeof this.onclick&&""!==this.disabled&&this.onclick()}update_disabled(e){""===e?this.ids.btn.setAttribute("disabled",""):this.ids.btn.removeAttribute("disabled")}})}]);