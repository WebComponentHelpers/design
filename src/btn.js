import {templateme as html} from "../node_modules/brick-element/build/brick.js"


export let btn_css = html` 
<style>
.btn {
    background-color: #9b4dca;
    border: 0.1rem solid #9b4dca;
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
    text-transform: uppercase;
    white-space: nowrap;
}

.btn:hover {
  background-color: #606c76;
  border-color: #606c76;
  color: #fff;
  outline: 0;
}

.btn:active {
  background-color: blue;
  border-color: #606c76;
  color: #fff;
  outline: 0;
}

</style>`;