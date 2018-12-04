import * as conf from "./configs.css"
import {templateme} from "brick-element"

export let host = templateme`
    <style>
    :host{
        contain: content; 
        display: inline-block;
    }
    </style>
`;

export let box_skeleton = templateme`
    <style>
    :host{
        margin : 0;
        box-sizing : border-box;

        background-color: ${conf.colors.white};
        border-radius: ${conf.radius.large};
        box-shadow: 0 2px 3px black;
        display: block;
        padding: 1.25rem;
        /*width: 500px;*/
    }
    </style>
`;
