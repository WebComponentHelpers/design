!function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function r(e){throw console.log("LitRead does not accept the following ${ } as input in string literal:"),console.log(e),Error("Invalid input.")}function s(e,...t){let o;if(o={template:"",props:{},imports:[],IDs:[]},e.length<=t.length)throw Error("Improper parameter size.");if(1===e.length)return o.template=`${e[0]}`,o;let s="";return e.forEach((e,n)=>{if(s+=e,n===t.length)return;let i=t[n];if("string"==typeof i){let e=i;if(e.trim(),"#"===e[0]&&"-"===e[1])s+=` id="${e.substring(2)}" `,o.IDs.push(e.substring(2));else if("|*"===e.slice(0,2)&&"*|"===e.slice(-2)){let t=e.replace(/\s/g,"").slice(2,-2).split("|");for(let e of t)e.includes("-b")?o.props[e.replace(/\-b/g,"")]="bool":o.props[e]="string"}else s+=i}else if("object"==typeof i)if(Array.isArray(i))for(let e of i)"string"==typeof e?s+=" "+e:"object"==typeof e&&"tagName"in e&&"TEMPLATE"===e.tagName?o.imports.push(e):r(e);else"tagName"in i&&"TEMPLATE"===i.tagName?o.imports.push(i):r(i);else"number"==typeof i?s+=i.toString(10):r(i)}),o.template=s,o}function n(e,...t){let o=s(e,...t),r=document.createElement("template");return r.innerHTML=o.template,Object.defineProperty(r,"_props",o.props),Object.defineProperty(r,"_IDs",o.IDs),r}function i(e,...t){let o=s(e,...t),r=document.createElement("template");return r.innerHTML=o.template,o.imports.push(r),(e,t)=>(class extends e{static get observedAttributes(){let e=[];return super.observedAttributes&&(e=super.observedAttributes),e.concat(Object.keys(o.props))}constructor(){super(),this._props||(this._props={});for(let e in o.props)this._props[e]=o.props[e];let e=t&&t.shadowRoot?t.shadowRoot:{mode:"open",delegatesFocus:!1},r=t&&t.inherit?this.shadowRoot:this.attachShadow(e);for(let e of o.imports)r.appendChild(e.content.cloneNode(!0));this.ids||(this.ids={});for(let e of o.IDs)this.ids[e]=r.getElementById(e);this.shadowRoot.qs=this.shadowRoot.querySelector,this.swr=this.shadowRoot,t&&t.inherit||this.setProps()}setProps(){for(let e in o.props)Object.defineProperty(this,e,{set:t=>{this.setAttribute(e,t)},get:()=>this.getAttribute(e)})}attributeChangedCallback(e,t,o){(!(null!==o)||t!==o)&&this._props.hasOwnProperty(e)&&void 0!==this["update_"+e]&&this["update_"+e](o)}})}o.r(t);let l=customElements.define.bind(customElements),d=600,a="hsl(0, 0%, 21%)",c="hsl(0, 0%, 41%)",b="hsl(0, 0%, 86%)",p="hsl(0, 0%, 100%)",u="hsl(217, 71%,  53%)",h=2.5,m=2,f=1.25,g=1,x=.75,$="4px",v="6px",y=n`
    <style>
        :host{
            /*contain: content;*/
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
`,w=n`
    <style>
    :host{
        margin : 0;
        box-sizing : border-box;

        background-color: ${p};
        border-radius: ${v};
        box-shadow: 0 2px 3px rgba(0,0,0, 0.1), 0 0 0 1px rgba(0,0,0, 0.1);
        display: block;
        padding: var(--padding-box,1.25rem);
    }
    </style>
`,k=`\n    border-color: var(--focused-border-color,${u});\n    box-shadow : var(--focused-box-shadow, 0 0 0 0.175em rgba(50, 115, 220, 0.25));\n    color : var(--focus-color,${u});\n`,z=`\n    border-width:1px;\n    border-style:solid;\n    background-color:${p};\n    border-color:${b};\n    border-radius:var(--radius,${v});\n    z-index:0;\n    box-shadow:  var(--unfocused-box-shadow, none);\n    padding : var(--padding-box,0.5em);\n`,E=i`
${[n`
    <style>
    :host{
        /*contain: content; */
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

  padding: var(--padding,0.8rem);

  background-color:  var(--bg-color, ${"#00d1b2"});
  border: 1px solid transparent;
  border: var(--border, 1px solid transparent);
  border-bottom: var(--border-bottom, 1px solid transparent);
  border-radius: var(--radious, .4rem);
  color: var(--color,#fff);
  cursor: pointer;
  box-shadow:  var(--unfocused-box-shadow,none);

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
  background-color: ${p};
  color: ${c};
  border-color: ${b};
  outline: 0;
}
:host(:not([simple])[white]:hover) > button {
  border-color: ${c};
  background-color: ${p};
  color: ${c};
}
:host(:not([simple])[white]:active) > button {
  color: ${a};
  background-color: ${p};
  border-color: ${c};

}

:host([focus]) > button:focus {
  ${k}
}
:host(:not([simple])[focus]) > button:focus {
  ${k}
}

:host(:not([simple])[white][focus]) > button:focus {
  ${k}
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
`;class L extends(E(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!0}})){constructor(){super(),this.ids.btn.onclick=this.onclick,this.ids.btn.onblur=this.onblur,this.ids.btn.onfocus=this.onfocus}update_disabled(e){""===e?this.ids.btn.setAttribute("disabled",""):this.ids.btn.removeAttribute("disabled")}}let M=n`
    <style>
        button {
            background-color: ${a};
            color : ${b};
            border-radius: ${$};
            width : 25px;
            height: 25px;
            padding : 0px;
            margin: 0px;
            padding-bottom : 0.2rem;
            vertical-align:center;
            letter-spacing: 0rem;
          

        }
`;let T=i`
    <style>
        :host {
            display: block;
                
            margin : 0;
            padding :0;  
            box-sizing : border-box;

            font-weight : ${d};
            color: var(--fontoColor,${c});
            line-height : 1.125;
            font-size : ${m}rem;
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
            font-size : ${g}rem;
        }
        :host([small]) {
            font-size : ${f}rem;
        }
        :host([medium]) {
            font-size : ${m}rem;
        }
        :host([large]) {
            font-size : ${h}rem;
        }
        :host([inverted]) {
            filter : invert(1);
        }
        ::slotted(strong){
            font-weight : inherit;
            color: ${"hsl(0, 0%, 4%)"};
            font-size: ${h}rem;
        }
        </style>
    <slot></slot>
`;let _=i`
    <style>
        :host {
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1.5rem;
        }
        
        p {
            font-weight : ${400};
            color: var(--fontoColor,${c});
            line-height : 1.25;
            font-size : ${m*x}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;
        }

        
        :host([smallest]) > p {
            font-size : ${g*x}rem;
        }
        :host([small]) > p {
            font-size : ${f*x}rem;
        }
        :host([medium]) > p {
            font-size : ${m*x}rem;
        }
        :host([large]) > p {
            font-size : ${h*x}rem;
        }
        :host([zero-margin]) > p {
            margin: 0;
        }
        ::slotted(strong){
            font-weight : ${d};
            color: ${c};
            font-size: ${h*x}rem;
        }
    </style>
    <p><slot></slot></p>
`;let A=i`
    ${w}
    <slot></slot>
`;let j=i`
    ${w}
    <style>
        :host{
            
            padding : 0;
            overflow : hidden;
        }
        div { 
            display: flex;
            flex-direction : row;
            background-color: ${c};
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
`;let H=i`
    ${y}
    <style>
        :host{
            ${z}
            display: inline-flex;
            flex-direction: row;
        }
        ::slotted(*):focus {
            outline:none;
            /*border-style:none;*/
            border:2px solid blue;
        }

        :host([focused]){
            ${k}
            
        }
      
    </style>
    <slot></slot>
`;let O=i` 
    ${y}
    
    <style>
        :host{
            display:block;
            background-color: var(--bg-color,${p});
            border: var(--border,1px solid);
            border-color: var(--border-color, ${b});
            border-radius: var(--border-radius, ${$});
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
            background-color: ${u};
            color: ${p};
        }
        ::slotted(a:active){
            background-color: ${u};
            color: ${"hsl(171, 100%, 41%)"};
        }
        
        
    </style>
    <div ${"#-box"}>
        <slot></slot>
    </div>
`;let P=i`
    ${y}

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

        <btn-x white focus ${"#-btn"}> <slot> I droppo  ;)</slot></btn-x>
        <menu-x ${"#-menu"}> <slot name="menu"> </slot> </menu-x>
    
`;class I extends(P(HTMLElement)){constructor(){super(),this.ids.btn.onfocus=this.drop.bind(this),this.ids.btn.onblur=this.undrop.bind(this)}drop(){this.ids.menu.style.display="block"}undrop(){this.ids.menu.style.display="none"}}let C=i`
    <style>
        menu-x{
            margin-top: 0px;
            --bg-color:${p};
            --border:0px;
            --border-radius:0px ${$} ${$} ${$} ; 
        }
        btn-x {
            --bg-color:${u};
            --radious: ${$} ${$} 0 0;
            --color: ${a};
            --focus-border-color:${c};
            --focus-color:${p};
            --focus-shadow:0;
            --border: 0px;
            --border-bottom: 8px solid transparent;

        }
    </style>

`;let R=i`
    ${y}
    <style>
        :host{
            --padding-box: 0px;
            ${z} 
            display:inline-flex;
            flex-direction:row;
        }
      
        :host([focused=""]){
            ${k}
        }
      
        input{
            margin:0px;
            color:${a};
            background-color:${p};
            border-radius:var(--radius,${v});
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
            color:${a};
        }
    </style>

    <div ${"#-before"} before> <slot name="before"> </slot> </div>
    <input type="text" ${"#-inpt"} >
    <div ${"#-after"} after> <slot name="after"></slot> </div>

    ${"|*placeholder*|"}
`;let S=i`
    ${y}
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
    
`;let N=i`

    <style>
        :host{
            display:flex;
            flex-direction:row;
            width:100%;
            justify-content:space-between;
            background-color: ${u};
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
`;customElements.define("btn-x",L),l("delete-x",class extends L{constructor(){super(),this.ids.btn.innerHTML="x",this.swr.appendChild(M.content.cloneNode(!0))}}),l("title-x",class extends(T(HTMLElement)){}),l("subtitle-x",class extends(_(HTMLElement)){}),l("box-x",class extends(A(HTMLElement)){}),l("focus-box",class extends(H(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!1}})){connectedCallback(){for(var e of(this.addEventListener("focus",this.foc),this.addEventListener("blur",this.blu),this.childNodes))e.addEventListener("focus",this.foc.bind(this)),e.addEventListener("blur",this.blu.bind(this))}foc(){this.setAttribute("focused","")}blu(){this.removeAttribute("focused")}}),l("message-x",class extends(j(HTMLElement)){}),l("menu-x",class extends(O(HTMLElement)){}),l("drop-x",I),l("smart-tag",class extends(C(I,{inherit:!0})){constructor(){super(),this.ids.btn.removeAttribute("white"),this.ids.btn.setAttribute("simple","")}}),l("input-x",class extends(R(HTMLElement)){constructor(){super(),this.ids.inpt.onfocus=this._focuseme.bind(this),this.ids.inpt.onblur=this._blurme.bind(this)}_focuseme(){this.setAttribute("focused","")}_blurme(){this.removeAttribute("focused"),this.validate&&this.validate()}get value(){return this.ids.inpt.value}set value(e){this.ids.inpt.value=e}update_placeholder(e){this.ids.inpt.placeholder=e}}),l("checkbox-x",class extends(S(HTMLElement)){get value(){return this.ids.inpt.checked}set value(e){this.ids.inpt.checked=e}}),l("nav-x",class extends(N(HTMLElement)){})}]);