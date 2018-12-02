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
