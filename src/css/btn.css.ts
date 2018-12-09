import {templateme as html} from "brick-element"
import * as conf from "./configs.css"
import {focus_mxn} from "./mixins.css"

export let btn_css = html` 
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

  background-color: ${conf.colorA};
  border: 1px solid transparent;
  border-radius: .4rem;
  color: #fff;
  cursor: pointer;

  -moz-appearance: none;
  -webkit-appearance: none;
}

:host(:hover) > button {
  background-color: ${conf.colorA_d};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

:host(:active) > button {
  background-color: ${conf.colorA_dd};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

:host([white]) > button{
  background-color: ${conf.colors.white};
  color: ${conf.colors.grey_dark};
  border-color: ${conf.colors.grey_lighter};
  outline: 0;
}
:host([white]:hover) > button {
  border-color: ${conf.colors.grey_dark};
}
:host([white]:active) > button {
  color: ${conf.colors.grey_darker};
}

:host([focus]) > button:focus {
  ${focus_mxn}
  color : ${conf.colors.blue}
}

:host([disabled]) > button {
  background-color: ${conf.colorA_dis};
  border-color: ${conf.colorA_disDark};
  color: ${conf.colorA_disDarker};
  cursor : not-allowed;
}

:host([disabled]:active) > button {
  background-color: ${conf.colorA_dis};
  border-color: ${conf.colorA_disDark};
  color: ${conf.colorA_disDarker};
  cursor : not-allowed;
}

:host([disabled]:hover) > button {
  background-color: ${conf.colorA_dis};
  border-color: ${conf.colorA_disDark};
  color: ${conf.colorA_disDarker};
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

</style>`;