import {brick as html, dfn} from "brick-element"
import {colors} from './css/configs.css'
import {normalize} from './css/mixins.css'


let mxn = html`

    <style>
        :host{
            display:flex;
            flex-direction:row;
            width:100%;
            justify-content:space-between;
            background-color: ${colors.blue};
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
`;

dfn('nav-x', class extends mxn(HTMLElement){});