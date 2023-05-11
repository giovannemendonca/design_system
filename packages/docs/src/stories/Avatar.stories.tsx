import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/giovannemendonca.png',
    alt: 'Giovanne Mendonça',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj = {
  args: {},
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
