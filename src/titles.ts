import {brick as html, dfn} from "brick-element"
import {weight, colors, txt_sizes, mixins} from "./css/configs.css"

let mxn = html`
    <style>
        :host {
            contain: content; 
            display: block;
        }
        :host([bottom-margin]) > p {
            margin-bottom: 1rem;
        }

        p {
            font-weight : ${weight.semibold};
            color: ${colors.grey_darker};
            line-height : 1.125;
            font-size : ${txt_sizes.size_3}rem;
            word-break: break-word;
            margin-top : 1rem;
            margin-bottom : 0rem;

        }
        p ${mixins.block}

        :host([small]) > p {
            font-size : ${txt_sizes.size_4}rem;
        }
        :host([medium]) > p {
            font-size : ${txt_sizes.size_3}rem;
        }
        :host([large]) > p {
            font-size : ${txt_sizes.size_2}rem;
        }
        ::slotted(strong){
            font-weight : inherit;
            color: ${colors.black};
            font-size: ${txt_sizes.size_2}rem;
        }
    </style>
    <p><slot></slot></p>
`;

customElements.define("title-x", class extends mxn(HTMLElement){});

// ---- subtitles ----//

let submxn = html`
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

dfn("subtitle-x", class extends submxn(HTMLElement){});
