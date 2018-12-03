import {templateme as html} from "brick-element"
import * as conf from "./configs.css"

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

  height: 3.8rem;
  padding: 0 2.0rem;

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
:host([disabled]) > button {
  background-color: ${conf.colorA_dis};
  border-color: ${conf.colorA_disDark};
  color: ${conf.colorA_disDarker};
  cursor : not-allowed;
}
button:focus {outline:none;}  
::-moz-focus-inner {border:0;}

</style>`;