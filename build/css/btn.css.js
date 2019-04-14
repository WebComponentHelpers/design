import { templateme as html } from "brick-element";
import * as conf from "./configs.css";
import { focus_mxn } from "./mixins.css";
export let btn_css = html ` 
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

  background-color:  var(--bg-color, ${conf.colorA});
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
  background-color: ${conf.colorA_d};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

:host(:not([simple]):active) > button {
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
:host(:not([simple])[white]:hover) > button {
  border-color: ${conf.colors.grey_dark};
  background-color: ${conf.colors.white};
  color: ${conf.colors.grey_dark};
}
:host(:not([simple])[white]:active) > button {
  color: ${conf.colors.grey_darker};
  background-color: ${conf.colors.white};
  border-color: ${conf.colors.grey_dark};

}

:host([focus]) > button:focus {
  ${focus_mxn}
}
:host(:not([simple])[focus]) > button:focus {
  ${focus_mxn}
}

:host(:not([simple])[white][focus]) > button:focus {
  ${focus_mxn}
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
