import { brick as html } from "brick-element";
import { weight, colors, txt_sizes, mixins } from "./css/configs.css";
let mxn = html `
    <style>
        :host {
            contain: content; 
            display: block;
                
            margin : 0;
            padding :0;  
            box-sizing : border-box;

            font-weight : ${weight.semibold};
            color: ${colors.grey_darker};
            line-height : 1.125;
            font-size : ${txt_sizes.size_3}rem;
            word-break: break-word;

        }
        ${mixins.block}
        
        :host([bottom-margin]) {
            margin-bottom: 1rem;
        }
        :host([top-margin]) {
            margin-top : 1rem;
        }

        :host([small]) {
            font-size : ${txt_sizes.size_5}rem;
        }
        :host([medium]) {
            font-size : ${txt_sizes.size_3}rem;
        }
        :host([large]) {
            font-size : ${txt_sizes.size_2}rem;
        }
        :host([inverted]) {
            filter : invert(1);
        }
        ::slotted(strong){
            font-weight : inherit;
            color: ${colors.black};
            font-size: ${txt_sizes.size_2}rem;
        }
    </style>
    <slot></slot>
`;
export class titleX extends mxn(HTMLElement) {
}
;
// ---- subtitles ----//
let submxn = html `
    <style>
        :host {
            contain: content; 
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1.5rem;
        }
        p {
            font-weight : ${weight.normal};
            color: ${colors.grey_dark};
            line-height : 1.25;
            font-size : ${txt_sizes.size_3 * txt_sizes.subtitle_factor}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;
        }
    
        :host([small]) > p {
            font-size : ${txt_sizes.size_4 * txt_sizes.subtitle_factor}rem;
        }
        :host([medium]) > p {
            font-size : ${txt_sizes.size_3 * txt_sizes.subtitle_factor}rem;
        }
        :host([large]) > p {
            font-size : ${txt_sizes.size_2 * txt_sizes.subtitle_factor}rem;
        }
        ::slotted(strong){
            font-weight : ${weight.semibold};
            color: ${colors.grey_dark};
            font-size: ${txt_sizes.size_2 * txt_sizes.subtitle_factor}rem;
        }
    </style>
    <p><slot></slot></p>
`;
export class subtitleX extends submxn(HTMLElement) {
}
;
