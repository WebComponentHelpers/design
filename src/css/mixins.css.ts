import * as conf from "./configs.css"
import {templateme} from "brick-element"

export let host = templateme`
    <style>
    :host{
        /*contain: content; */
        box-sizing : border-box;
        display: inline;
    }
    </style>
`;

export let normalize = templateme`
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
    }
    </style>
`;

export let focus_mxn = `
    border-color: var(--focus-border-color,${conf.colors.blue});
    box-shadow : 0 0 0 var(--focus-shadow,0.175em) rgba(50, 115, 220, 0.25);
    color : var(--focus-color,${conf.colors.blue})
`;
export let shadow = `
    box-shadow: 0 2px 3px black;
`;
