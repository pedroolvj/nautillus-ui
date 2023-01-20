import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './../components/button/naut-button'

export default {
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    slots: { type: 'string', defaultValue: 'Button'},
    onClick: { action: 'onClick'}
  },
  render: (args) => html`<naut-button @click=${args.onClick}>${args.slots}</naut-button>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
}
