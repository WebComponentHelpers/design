!function(t){var e={};function o(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";function r(t){throw console.log("LitRead does not accept the following ${ } as input in string literal:"),console.log(t),Error("Invalid input.")}function s(t,...e){let o;if(o={template:"",props:{},imports:[],IDs:[]},t.length<=e.length)throw Error("Improper parameter size.");if(1===t.length)return o.template=`${t[0]}`,o;let s="";return t.forEach((t,n)=>{if(s+=t,n===e.length)return;let i=e[n];if("string"==typeof i){let t=i;if(t.trim(),"#"===t[0]&&"-"===t[1])s+=` id="${t.substring(2)}" `,o.IDs.push(t.substring(2));else if("|*"===t.slice(0,2)&&"*|"===t.slice(-2)){let e=t.replace(/\s/g,"").slice(2,-2).split("|");for(let t of e)t.includes("-b")?o.props[t.replace(/\-b/g,"")]="bool":o.props[t]="string"}else s+=i}else if("object"==typeof i)if(Array.isArray(i))for(let t of i)"string"==typeof t?s+=" "+t:"object"==typeof t&&"tagName"in t&&"TEMPLATE"===t.tagName?o.imports.push(t):r(t);else"tagName"in i&&"TEMPLATE"===i.tagName?o.imports.push(i):r(i);else"number"==typeof i?s+=i.toString(10):r(i)}),o.template=s,o}function n(t,...e){let o=s(t,...e),r=document.createElement("template");return r.innerHTML=o.template,Object.defineProperty(r,"_props",o.props),Object.defineProperty(r,"_IDs",o.IDs),r}function i(t,...e){let o=s(t,...e),r=document.createElement("template");return r.innerHTML=o.template,o.imports.push(r),(t,e)=>(class extends t{static get observedAttributes(){let t=[];return super.observedAttributes&&(t=super.observedAttributes),t.concat(Object.keys(o.props))}constructor(){super(),this._props||(this._props={});for(let t in o.props)this._props[t]=o.props[t];let t=e&&e.shadowRoot?e.shadowRoot:{mode:"open",delegatesFocus:!1},r=e&&e.inherit?this.shadowRoot:this.attachShadow(t);for(let t of o.imports)r.appendChild(t.content.cloneNode(!0));this.ids||(this.ids={});for(let t of o.IDs)this.ids[t]=r.getElementById(t);this.shadowRoot.qs=this.shadowRoot.querySelector,this.swr=this.shadowRoot,e&&e.inherit||this.setProps()}setProps(){for(let t in o.props)Object.defineProperty(this,t,{set:e=>{this.setAttribute(t,e)},get:()=>this.getAttribute(t)})}attributeChangedCallback(t,e,o){(!(null!==o)||e!==o)&&this._props.hasOwnProperty(t)&&void 0!==this["update_"+t]&&this["update_"+t](o)}})}o.r(e);let l=customElements.define.bind(customElements),d=400,a=600,c="hsl(0, 0%, 4%)",u="hsl(0, 0%, 21%)",p="hsl(0, 0%, 41%)",b="hsl(0, 0%, 86%)",h="hsl(0, 0%, 100%)",m="hsl(171, 100%, 41%)",f="hsl(217, 71%,  53%)",g=2.5,x=2,$=1.5,y=1.25,v=.75,w="4px",k="6px",z=n`
    <style>
        :host{
            contain: content;
            box-sizing : border-box;
            display: inline;
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
`,E=n`
    <style>
    :host{
        margin : 0;
        box-sizing : border-box;

        background-color: ${h};
        border-radius: ${k};
        box-shadow: 0 2px 3px black;
        display: block;
        padding: 1.25rem;
    }
    </style>
`,M=`\n    border-color: var(--focus-border-color,${f});\n    box-shadow : 0 0 0 var(--focus-shadow,0.175em) rgba(50, 115, 220, 0.25);\n    color : var(--focus-color,${f})\n`,T=i`
${[n`
    <style>
    :host{
        contain: content; 
        box-sizing : border-box;
        display: inline;
    }
    </style>
`,n` 
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

  background-color:  var(--bg-color, ${"#00d1b2"});
  border: 1px solid transparent;
  border: var(--border, 1px solid transparent);
  border-bottom: var(--border-bottom, 1px solid transparent);
  border-radius: var(--radious, .4rem);
  color: var(--color,#fff);
  cursor: pointer;

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
  background-color: ${h};
  color: ${p};
  border-color: ${b};
  outline: 0;
}
:host(:not([simple])[white]:hover) > button {
  border-color: ${p};
  background-color: ${h};
  color: ${p};
}
:host(:not([simple])[white]:active) > button {
  color: ${u};
  background-color: ${h};
  border-color: ${p};

}

:host([focus]) > button:focus {
  ${M}
}
:host(:not([simple])[focus]) > button:focus {
  ${M}
}

:host(:not([simple])[white][focus]) > button:focus {
  ${M}
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
`;class _ extends(T(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!0}})){constructor(){super(),this.ids.btn.onclick=this.onclick,this.ids.btn.onblur=this.onblur,this.ids.btn.onfocus=this.onfocus}update_disabled(t){""===t?this.ids.btn.setAttribute("disabled",""):this.ids.btn.removeAttribute("disabled")}}customElements.define("btn-x",_);let A=n`
    <style>
        button {
            background-color: ${u};
            color : ${b};
            border-radius: ${w};
            width : 25px;
            height: 25px;
            padding : 0px;
            margin: 0px;
            padding-bottom : 0.2rem;
            vertical-align:center;
            letter-spacing: 0rem;
          

        }
`;l("delete-x",class extends _{constructor(){super(),this.ids.btn.innerHTML="x",this.swr.appendChild(A.content.cloneNode(!0))}});let j=i`
    <style>
        :host {
            contain: content; 
            display: block;
                
            margin : 0;
            padding :0;  
            box-sizing : border-box;

            font-weight : ${a};
            color: ${u};
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
`;customElements.define("title-x",class extends(j(HTMLElement)){});let L=i`
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
            color: ${p};
            line-height : 1.25;
            font-size : ${x*v}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;
        }
    
        :host([small]) > p {
            font-size : ${$*v}rem;
        }
        :host([medium]) > p {
            font-size : ${x*v}rem;
        }
        :host([large]) > p {
            font-size : ${g*v}rem;
        }
        ::slotted(strong){
            font-weight : ${a};
            color: ${p};
            font-size: ${g*v}rem;
        }
    </style>
    <p><slot></slot></p>
`;l("subtitle-x",class extends(L(HTMLElement)){});let P=i`
    ${E}
    <slot></slot>
`;l("box-x",class extends(P(HTMLElement)){});let O=i`
    ${E}
    <style>
        :host{
            
            padding : 0;
            overflow : hidden;
        }
        div { 
            display: flex;
            flex-direction : row;
            background-color: ${p};
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
`;l("message-x",class extends(O(HTMLElement)){});let H=i` 
    ${z}
    
    <style>
        :host{
            display:block;
            background-color: var(--bg-color,${h});
            border: var(--border,1px solid);
            border-color: var(--border-color, ${b});
            border-radius: var(--border-radius, ${w});
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
`;l("menu-x",class extends(H(HTMLElement)){});let I=i`
    ${z}

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
    
`;class R extends(I(HTMLElement)){constructor(){super(),this.ids.btn.onfocus=this.drop.bind(this),this.ids.btn.onblur=this.undrop.bind(this)}drop(){this.ids.menu.style.display="block"}undrop(){this.ids.menu.style.display="none"}}l("drop-x",R);let S=i`
    <style>
        menu-x{
            margin-top: 0px;
            --bg-color:pink;
            --border:0px;
            --border-radius:0px ${w} ${w} ${w} ; 
        }
        btn-x {
            --bg-color:pink;
            --radious: ${w} ${w} 0 0;
            --color: ${p};
            --focus-border-color:red;
            --focus-color:red;
            --focus-shadow:0;
            --border: 0px;
            --border-bottom: 8px solid transparent;

        }
    </style>

`;l("smart-tag",class extends(S(R,{inherit:!0})){constructor(){super(),this.ids.btn.removeAttribute("white"),this.ids.btn.setAttribute("simple","")}});let N=i`
    ${z}
    <style>
        :host{
            border-width:1px;
            border-style:solid;
            background-color:${h};
            border-color:${b};
            border-radius:${k};
            display:inline-flex;
            flex-direction:row;
        }
        :host([focused=""]){
            ${M}
        }
        input{
            margin:0px;
            color:${u};
            background-color:${h};
            border-radius:${k};
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
            color:${u};
        }
    </style>

    <div before> <slot name="before"> test </slot> </div>
    <input type="text" ${"#-inpt"} >
    <div after> <slot name="after"></slot> </div>
    ${"|*placeholder*|"}
`;l("input-x",class extends(N(HTMLElement)){constructor(){super(),this.ids.inpt.onfocus=this.focuseme.bind(this),this.ids.inpt.onblur=this.blurme.bind(this)}focuseme(){this.setAttribute("focused",""),this.onfocus&&this.onfocus()}blurme(){this.removeAttribute("focused"),this.onblur&&this.onblur,this.validate&&this.validate()}get value(){return this.ids.inpt.value}set value(t){this.ids.inpt.value=t}update_placeholder(t){this.ids.inpt.placeholder=t}})}]);