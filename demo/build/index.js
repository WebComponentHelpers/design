!function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function r(e){throw console.log("LitRead does not accept the following ${ } as input in string literal:"),console.log(e),Error("Invalid input.")}function s(e,...t){let o;if(o={template:"",props:{},imports:[],IDs:[]},e.length<=t.length)throw Error("Improper parameter size.");if(1===e.length)return o.template=`${e[0]}`,o;let s="";return e.forEach((e,n)=>{if(s+=e,n===t.length)return;let i=t[n];if("string"==typeof i){let e=i;if(e.trim(),"#"===e[0]&&"-"===e[1])s+=` id="${e.substring(2)}" `,o.IDs.push(e.substring(2));else if("|*"===e.slice(0,2)&&"*|"===e.slice(-2)){let t=e.replace(/\s/g,"").slice(2,-2).split("|");for(let e of t)e.includes("-b")?o.props[e.replace(/\-b/g,"")]="bool":o.props[e]="string"}else s+=i}else if("object"==typeof i)if(Array.isArray(i))for(let e of i)"string"==typeof e?s+=" "+e:"object"==typeof e&&"tagName"in e&&"TEMPLATE"===e.tagName?o.imports.push(e):r(e);else if("tagName"in i&&"TEMPLATE"===i.tagName){if(o.imports.push(i),i.hasOwnProperty("_props")&&null!=i._props&&null!=i._props)for(let e in i._props)this._props[e]=i._props[e];i.hasOwnProperty("_IDs")&&null!=i._IDs&&null!=i._IDs&&o.IDs.concat(i._IDs)}else r(i);else"number"==typeof i?s+=i.toString(10):r(i)}),o.template=s,o}function n(e,...t){let o=s(e,...t),r=document.createElement("template");return r.innerHTML=o.template,Object.defineProperty(r,"_props",o.props),Object.defineProperty(r,"_IDs",o.IDs),r}function i(e,...t){let o=s(e,...t),r=document.createElement("template");return r.innerHTML=o.template,o.imports.push(r),function(e,t){return class extends e{static get observedAttributes(){let e=[];return super.observedAttributes&&(e=super.observedAttributes),e.concat(Object.keys(o.props))}constructor(...e){super(),this._props||(this._props={});for(let e in o.props)this._props[e]=o.props[e];let r=t&&t.shadowRoot?t.shadowRoot:{mode:"open",delegatesFocus:!1},s=t&&t.inherit?this.shadowRoot:this.attachShadow(r);for(let e of o.imports)s.appendChild(e.content.cloneNode(!0));this.ids||(this.ids={});for(let e of o.IDs)this.ids[e]=s.getElementById(e);this.qs=this.shadowRoot.querySelector,this.swr=this.shadowRoot,this.setProps(),this.acquireSlots(),this.setRootToChilds()}setProps(){for(let e in this._props)this.hasOwnProperty(e)||Object.defineProperty(this,e,{set:t=>{this.setAttribute(e,t)},get:()=>this.getAttribute(e)})}acquireSlots(){let e=this.swr.querySelectorAll("slot");for(let t of e)if(t.hasAttribute("type")){let e=t.getAttribute("name"),o=t.getAttribute("type");if(""===e||""===o||null===e||this.hasOwnProperty(e))continue;Object.defineProperty(this,e,{set:t=>{let r=this.querySelectorAll(`[slot=${e}]`);for(let e of r)this.removeChild(e);let s=[];Array.isArray(t)?s=t:s.push(t);for(let t of s){let r=document.createElement(o);r.setAttribute("slot",e);for(let e in t)void 0!==r[e]?r[e]=t[e]:console.log("EROR: key '",e,"' not assignable to class ",r.tagName);this.appendChild(r)}},get:()=>{let t=this.querySelectorAll(`[slot=${e}]`);return 1===t.length?t[0]:t}})}}ingestData(e){for(let t in e)void 0!==this[t]?this[t]=e[t]:console.log("EROR: key '",t,"' not assignable to class ",this.className)}setRootToChilds(){let e=this.swr.querySelectorAll("*");for(let t of e)t.root=this}attributeChangedCallback(e,t,o){(!(null!==o)||t!==o)&&this._props.hasOwnProperty(e)&&void 0!==this["update_"+e]&&this["update_"+e](o)}}}}o.r(t);let l=customElements.define.bind(customElements);function d(e,t){customElements.get(e)||customElements.define(e,t)}let a=600,c="hsl(0, 0%, 21%)",u="hsl(0, 0%, 41%)",p="hsl(0, 0%, 86%)",b="hsl(0, 0%, 100%)",h="hsl(217, 71%,  53%)",f=2.5,m=2,g=1.25,x=1,v=.75,$="4px",y="6px",w=n`
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
`,k=n`
    <style>
    :host{
        margin : 0;
        box-sizing : border-box;

        background-color: var(--bkg-color,${b});
        border-radius: ${y};
        box-shadow: 0 2px 3px rgba(0,0,0, 0.1), 0 0 0 1px rgba(0,0,0, 0.1);
        display: block;
        padding: var(--padding-box,1.25rem);
    }
    </style>
`,E=`\n    border-color: var(--focused-border-color,${h});\n    box-shadow : var(--focused-box-shadow, 0 0 0 0.175em rgba(50, 115, 220, 0.25));\n    color : var(--focus-color,${h});\n`,_=`\n    border-width:1px;\n    border-style:solid;\n    background-color:${b};\n    border-color:${p};\n    border-radius:var(--radius,${y});\n    z-index:0;\n    box-shadow:  var(--unfocused-box-shadow, none);\n    padding : var(--padding-box,0.5em);\n`,z=i`
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

  width: var(--width,fit-content);
  
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
  background-color: var(--override-white, ${b});
  color: ${u};
  border-color: ${p};
  outline: 0;
}
:host(:not([simple])[white]:hover) > button {
  background-color: var(--override-white, ${b});
  border-color: ${u};
  color: ${u};
}
:host(:not([simple])[white]:active) > button {
  background-color: var(--override-white, ${b});
  color: ${c};
  border-color: ${u};
}

:host([focus]) > button:focus {
  ${E}
}
:host(:not([simple])[focus]) > button:focus {
  ${E}
}

:host(:not([simple])[white][focus]) > button:focus {
  ${E}
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
`;class A extends(z(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!0}})){constructor(){super(),this.ids.btn.onclick=this.onclick,this.ids.btn.onblur=this.onblur,this.ids.btn.onfocus=this.onfocus}update_disabled(e){""===e?this.ids.btn.setAttribute("disabled",""):this.ids.btn.removeAttribute("disabled")}}let T=n`
    <style>
        button {
            background-color: ${c};
            color : ${p};
            border-radius: ${$};
            width : 25px;
            height: 25px;
            padding : 0px;
            margin: 0px;
            padding-bottom : 0.2rem;
            vertical-align:center;
            letter-spacing: 0rem;
          

        }
`;let L=i`
    <style>
        :host {
            display: block;
                
            margin : 0;
            padding :0;  
            box-sizing : border-box;

            font-weight : ${a};
            color: var(--fontColor,${u});
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
            font-size : ${x}rem;
        }
        :host([small]) {
            font-size : ${g}rem;
        }
        :host([medium]) {
            font-size : ${m}rem;
        }
        :host([large]) {
            font-size : ${f}rem;
        }
        :host([inverted]) {
            filter : invert(1);
        }
        ::slotted(strong){
            font-weight : inherit;
            color: ${"hsl(0, 0%, 4%)"};
            font-size: ${f}rem;
        }
        </style>
    <slot></slot>
`;class M extends(L(HTMLElement)){}let O=i`
    <style>
        :host {
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1.5rem;
        }
        
        p {
            font-weight : ${400};
            color: var(--fontColor,${u});
            line-height : 1.25;
            font-size : ${m*v}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;
        }

        
        :host([smallest]) > p {
            font-size : ${x*v}rem;
        }
        :host([small]) > p {
            font-size : ${g*v}rem;
        }
        :host([medium]) > p {
            font-size : ${m*v}rem;
        }
        :host([large]) > p {
            font-size : ${f*v}rem;
        }
        :host([zero-margin]) > p {
            margin: 0;
        }
        ::slotted(strong){
            font-weight : ${a};
            color: ${u};
            font-size: ${f*v}rem;
        }
    </style>
    <p><slot></slot></p>
`;class P extends(O(HTMLElement)){}let j=i`
    ${k}
    <slot></slot>
`;class I extends(j(HTMLElement)){}let S=i`
    ${k}
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
`;class H extends(S(HTMLElement)){}let R=i`
    ${w}
    <style>
        :host{
            ${_}
            display: inline-flex;
            flex-direction: row;
        }
        ::slotted(*):focus {
            outline:none;
            /*border-style:none;*/
            border:2px solid blue;
        }

        :host([focused]){
            ${E}
            
        }
      
    </style>
    <slot></slot>
`;class C extends(R(HTMLElement,{shadowRoot:{mode:"open",delegatesFocus:!1}})){connectedCallback(){for(var e of(this.addEventListener("focus",this.foc),this.addEventListener("blur",this.blu),this.childNodes))e.addEventListener("focus",this.foc.bind(this)),e.addEventListener("blur",this.blu.bind(this))}foc(){this.setAttribute("focused","")}blu(){this.removeAttribute("focused")}}let D=i` 
    ${w}
    
    <style>
        :host{
            display:block;
            background-color: var(--bg-color,${b});
            border: var(--border,1px solid);
            border-color: var(--border-color, ${p});
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
            background-color: ${h};
            color: ${b};
        }
        ::slotted(a:active){
            background-color: ${h};
            color: ${"hsl(171, 100%, 41%)"};
        }
        
        
    </style>
    <div ${"#-box"}>
        <slot></slot>
    </div>
`;class N extends(D(HTMLElement)){}let q=i`
    ${w}

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
        button-x{
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

        <button-x white focus ${"#-btn"}> <slot> I droppo  ;)</slot></button-x>
        <menu-x ${"#-menu"}> <slot name="menu"> </slot> </menu-x>
    
`;class F extends(q(HTMLElement)){constructor(){super(),d("button-x",A),d("menu-x",N),this.ids.btn.onfocus=this.drop.bind(this),this.ids.btn.onblur=this.undrop.bind(this)}drop(){this.ids.menu.style.display="block"}undrop(){this.ids.menu.style.display="none"}}let B=i`
    <style>
        menu-x{
            margin-top: 0px;
            --bg-color:${b};
            --border:0px;
            --border-radius:0px ${$} ${$} ${$} ; 
        }
        button-x {
            --bg-color:${h};
            --radious: ${$} ${$} 0 0;
            --color: ${c};
            --focus-border-color:${u};
            --focus-color:${b};
            --focus-shadow:0;
            --border: 0px;
            --border-bottom: 8px solid transparent;

        }
    </style>

`;class G extends(B(F,{inherit:!0})){constructor(){super(),this.ids.btn.removeAttribute("white"),this.ids.btn.setAttribute("simple","")}}let J=i`
    ${w}
    <style>
        :host{
            --padding-box: 0px;
            ${_} 
            display:inline-flex;
            flex-direction:row;
        }
      
        :host([focused=""]){
            ${E}
        }
      
        input{
            margin:0px;
            color:${c};
            background-color:${b};
            border-radius:var(--radius,${y});
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
            color:${c};
        }
    </style>

    <div ${"#-before"} before> <slot name="before"> </slot> </div>
    <input type="text" ${"#-inpt"} >
    <div ${"#-after"} after> <slot name="after"></slot> </div>

    ${"|*placeholder*|"}
`;class K extends(J(HTMLElement)){constructor(){super(),this.ids.inpt.onfocus=this._focuseme.bind(this),this.ids.inpt.onblur=this._blurme.bind(this)}_focuseme(){this.setAttribute("focused","")}_blurme(){this.removeAttribute("focused"),this.validate&&this.validate()}get value(){return this.ids.inpt.value}set value(e){this.ids.inpt.value=e}update_placeholder(e){this.ids.inpt.placeholder=e}}let Q=i`
    ${w}
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
    
`;class U extends(Q(HTMLElement)){get value(){return this.ids.inpt.checked}set value(e){this.ids.inpt.checked=e}}let V=i`

    <style>
        :host{
            display:flex;
            flex-direction:row;
            width:100%;
            justify-content:space-between;
            background-color: ${h};
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
`;class W extends(V(HTMLElement)){}customElements.define("button-x",A),l("delete-x",class extends A{constructor(){super(),this.ids.btn.innerHTML="x",this.swr.appendChild(T.content.cloneNode(!0))}}),l("title-x",M),l("subtitle-x",P),l("box-x",I),l("focus-box",C),l("message-x",H),l("menu-x",N),l("drop-x",F),l("smart-tag",G),l("input-x",K),l("checkbox-x",U),l("nav-x",W)}]);