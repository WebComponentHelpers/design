import {brick as html, dfn} from "brick-element"
import {box_skeleton} from "./css/mixins.css"
import {colors, weight} from "./css/configs.css"
import "./titles"

let mxn = html`
    ${box_skeleton}
    <slot></slot>
`;

dfn('box-x',class extends mxn(HTMLElement){});

let mxn_mes = html`
    ${box_skeleton}
    <style>
        :host{
            display: flex;
            flex-direction : column;
            padding : 0;
            overflow : hidden;
        }
        div { 
            width : 100%;
            height: auto;
            background-color: ${colors.grey_dark};
            padding :10px;
        }
        p{
            margin : 0;
            flex-grow: 1;
            padding : 20px;
        }
    </style>
    <div> 
        <title-x small inverted> 
            <slot name="title"></slot>
        </title-x>
    </div>
    <p> <slot name="content"> </slot> </p>
`;
dfn('message-x',class extends mxn_mes(HTMLElement){});
