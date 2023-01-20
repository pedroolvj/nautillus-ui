import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyle } from '../../css/global-style.css'

@customElement('naut-button')

export class NautButton extends LitElement {

  static styles = [globalStyle, css`
    button {
      font-family: var(--fontFamily_button , var(--naut-fontFamily_g));
      font-size: var(--fontSize_button, var(--naut-fontSize-small_g));
      font-weight: var(--fontWeight_button, var(--naut-fontWeight-400_g));
      color: var(--color_button, var(--naut-white-400_g));
      background: var(--background_button, var(--naut-black-600_g));
      box-shadow: var(--boxShadow_button, var(--naut-bs-400_g));
      border-radius: var(--borderRadius_button, var(--naut-radii-3_g));
      border: var(--border_button, none);
      padding-inline: var(--padding-inline_button, var(--naut-padding-16_g));
      padding-block: var(--padding-block_button, var(--naut-padding-8_g));
      cursor: var(--curso_button, pointer);
      transition: var(--transition_button, var(--naut-transition-400_g));
      outline: var(--outline_button, none);
    }

    button:hover {
      background: var(--background_buttonHover, var(--naut-black-200_g));
    }

    button:active {
      background: var(--background_buttonActive, var(--naut-black-400_g));
    }

    button:focus {
      box-shadow: var(--boxShadow_buttonFocus, var(--naut-bs-600_g));
    }

    // hover, focus, and active 
  `]

  render() {
    return html`
      <button part="button">
        <slot></slot>
      </button>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'naut-button': NautButton
  }
}