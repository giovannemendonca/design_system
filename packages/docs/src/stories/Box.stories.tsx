import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o Elemento Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj = {
  args: {},
}
