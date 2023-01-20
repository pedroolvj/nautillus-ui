import {css} from "lit-element";

export const globalStyle = [css`
    * {
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }
    :host {
        --naut-white-400_g: #F4F5F6;

        --naut-grey-400_g: #626567;
        --naut-grey-600_g: #777E90;

        --naut-black-200_g: #353945;
        --naut-black-400_g: #23262F;
        --naut-black-600_g: #151718;

        --naut-padding-8_g: 8px;
        --naut-padding-16_g: 16px;

        --naut-border-400_g: solid 2px var(--naut-grey-400_g);

        --naut-fontFamily_g: 'Noto Sans', sans-serif;

        --naut-fontWeight-300_g: 300;
        --naut-fontWeight-400_g: 400;
        --naut-fontWeight-700_g: 700;

        --naut-radii-3_g: 3px;

        --naut-bs-400_g: inset 0 0 0 1px var(--naut-grey-400_g); 
        --naut-bs-600_g: 0 0 0 2px var(--naut-grey-600_g); 

        --naut-transition-400_g: all 300ms ease
    }
`]