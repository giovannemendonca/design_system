import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, blanditiis! Odio beatae ea dicta. Suscipit non odit voluptatibus dignissimos dolore sapiente alias. Sint animi aliquam neque eum obcaecati id consequuntur.,',
  },
} as Meta<TextProps>

export const Primary: StoryObj = {
  args: {},
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
