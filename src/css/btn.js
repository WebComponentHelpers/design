import {templateme as html} from "../../node_modules/brick-element/build/brick.js"
import * as conf from "./configs.js"

export let btn_css = html` 
<style>
div {
    background-color: ${conf.colorA};
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
  background-color: ${conf.colorA_d};
  border-color: transparent;
  color: #fff;
  outline: 0;
}

div:active {
  background-color: ${conf.colorA_dd};
  border-color: transparent;
  color: #fff;
  outline: 0;
}
div[disabled]{
  background-color: ${conf.colorA_dis};
}


</style>`;