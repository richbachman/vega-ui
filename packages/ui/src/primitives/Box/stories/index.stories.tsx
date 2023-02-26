import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../src';
import { TestBox } from '../src/TestBox';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  render: () => (
    <Box
      as="span"
      backgroundColor="$colorBackgroundDestructive"
      color="$colorTextInverse"
      padding="$space20"
      display="flex"
      borderWidth="$borderWidth10"
      borderColor="$colorBorderPrimaryStrong"
      borderStyle="solid"
    >
      Test
    </Box>
  ),
};

export const TestBoxTest: Story = {
  render: () => (
    <TestBox
      as="span"
      backgroundColor="colorBackgroundDestructive"
      color="colorTextInverse"
      padding="space20"
      display="flex"
      borderWidth="borderWidth10"
      borderColor="colorBorderPrimaryStrong"
      borderStyle="solid"
    >
      Test
    </TestBox>
  ),
};
