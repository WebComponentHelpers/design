import * as conf from "./configs.css"
import {templateme} from "brick-element"

export let host = templateme`
    <style>
    :host{
        /*contain: content; */
        box-sizing : border-box;
    }
    </style>
`;

export let normalize = templateme`
    <style>
        :host{
            /*contain: content;*/
            box-sizing : border-box;
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

        background-color: var(--bkg-color,${conf.colors.white});
        border-radius: ${conf.radius.large};
        box-shadow: 0 2px 3px rgba(0,0,0, 0.1), 0 0 0 1px rgba(0,0,0, 0.1);
        display: block;
        padding: var(--padding-box,1.25rem);
    }
    </style>
`;
/**
 * to be used as string inside an element, not as template, use box_skeleton for that instead.
 */
export let box_skeleton_str = `
        margin : 0;
        box-sizing : border-box;

        background-color: var(--bkg-color,${conf.colors.white});
        border-radius: ${conf.radius.large};
        box-shadow: 0 2px 3px rgba(0,0,0, 0.1), 0 0 0 1px rgba(0,0,0, 0.1);
        display: block;
        padding: var(--padding-box,1.25rem);
`;

export let focus_mxn = `
    border-color: var(--focused-border-color,${conf.colors.blue});
    box-shadow : var(--focused-box-shadow, 0 0 0 0.175em rgba(50, 115, 220, 0.25));
    color : var(--focus-color,${conf.colors.blue});
`;
export let shadow = {    
    heavy: "0 2px 3px black",
    medium: "0 2px 3px rgba(0,0,0, 0.3)",
    light: "0 2px 3px rgba(0,0,0, 0.1), 0 0 0 1px rgba(0,0,0, 0.1)",
};

export let light_box=`
    border-width:1px;
    border-style:solid;
    background-color:${conf.colors.white};
    border-color:${conf.colors.grey_lighter};
    border-radius:var(--radius,${conf.radius.large});
    z-index:0;
    box-shadow:  var(--unfocused-box-shadow, none);
    padding : var(--padding-box,0.5em);
`;

