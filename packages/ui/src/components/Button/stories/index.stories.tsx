import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../../../primitives/Box/src';
import { darkTheme } from '../../../themes/darkTheme.css';
import { Button } from '../src';
import { Button as ButtonBox } from '../src/index-box';
import type { ButtonVariants } from '../src/types';

const ButtonSizeOptions = ['default'];

const AllButtons = ({ variant }: { variant: ButtonVariants }): JSX.Element => {
  const allButtons: React.ReactNode[] = [];

  for (const size of ButtonSizeOptions) {
    const children = variant;

    allButtons.push(
      <>
        <Box key={`variant-${variant}-${size}`} padding="$space30">
          <Box display="flex" flexDirection="row" gap="$space40">
            <Button variant={variant as ButtonVariants}>{children}</Button>
            <Button variant={variant as ButtonVariants} loading>
              {children}
            </Button>
            <Button variant={variant as ButtonVariants} disabled>
              {children}
            </Button>
          </Box>
        </Box>
        <Box
          key={`variant-${variant}-${size}`}
          marginBottom="$space40"
          padding="$space30"
        >
          <Box display="flex" flexDirection="column" gap="$space40">
            <Button variant={variant as ButtonVariants} fullWidth>
              {children}
            </Button>
            <Button variant={variant as ButtonVariants} fullWidth loading>
              {children}
            </Button>
            <Button variant={variant as ButtonVariants} fullWidth disabled>
              {children}
            </Button>
          </Box>
        </Box>

        <Box className={darkTheme}>
          <Box backgroundColor="$colorBackgroundInverse" padding="$space60">
            <Box key={`variant-${variant}-${size}`} padding="$space30">
              <Box display="flex" flexDirection="row" gap="$space40">
                <Button variant={variant as ButtonVariants}>{children}</Button>
                <Button variant={variant as ButtonVariants} loading>
                  {children}
                </Button>
                <Button variant={variant as ButtonVariants} disabled>
                  {children}
                </Button>
              </Box>
            </Box>
            <Box
              key={`variant-${variant}-${size}`}
              marginBottom="$space40"
              padding="$space30"
            >
              <Box display="flex" flexDirection="column" gap="$space40">
                <Button variant={variant as ButtonVariants} fullWidth>
                  {children}
                </Button>
                <Button variant={variant as ButtonVariants} fullWidth loading>
                  {children}
                </Button>
                <Button variant={variant as ButtonVariants} fullWidth disabled>
                  {children}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }

  return <Box>{allButtons}</Box>;
};

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton = (): JSX.Element => (
  <AllButtons variant="primary" />
);

export const SecondaryButton = (): JSX.Element => (
  <AllButtons variant="secondary" />
);

export const BoxButton: Story = {
  render: () => <ButtonBox variant="primary">Box button</ButtonBox>,
};

export const ButtonAsAnchor: Story = {
  render: () => (
    <Box display="flex" flexDirection="row" gap="$space40">
      <Button as="a" href="#" variant="primary">
        Link button
      </Button>
      <Button as="a" href="#" variant="secondary">
        Link button
      </Button>
    </Box>
  ),
};
