import React from 'react';
import merge from 'deepmerge';
import { TestBox } from '../../../primitives/Box/src/TestBox';
import type { Sprinkles } from '../../../styles/test-style-props.css';
import {
  baseStyles,
  defaultStyles,
  disabledStyles,
  loadingStyles,
  resetStyles,
} from './styles';
import type { DirectButtonProps } from './types';

const disabledPrimaryStyles = merge(disabledStyles, {
  backgroundColor: {
    base: 'colorBackgroundWeak',
    hover: 'colorBackgroundWeak',
    active: 'colorBackgroundWeak',
  },
  boxShadow: {
    base: 'shadowBorderWeak',
    hover: 'shadowBorderWeak',
    active: 'shadowBorderWeak',
  },
} satisfies Sprinkles);

const loadingPrimaryStyles = merge(loadingStyles, {
  backgroundColor: {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    base: 'colorBackgroundPrimaryStrong',
    hover: 'colorBackgroundPrimaryStrong',
    active: 'colorBackgroundPrimaryStrong',
  },
  boxShadow: {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    base: 'shadowBorderPrimaryStrong',
    hover: 'shadowBorderPrimaryStrong',
    active: 'shadowBorderPrimaryStrong',
  },
} satisfies Sprinkles);

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingPrimaryStyles,
  disabled: disabledPrimaryStyles,
};

const PrimaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ buttonState, children, fullWidth, ...props }, ref): JSX.Element => {
    return (
      <TestBox
        {...props}
        {...resetStyles}
        {...baseStyles}
        backgroundColor={{
          base: 'colorBackgroundPrimary',
          hover: 'colorBackgroundPrimaryStrong',
          active: 'colorBackgroundPrimaryStrong',
        }}
        boxShadow={{
          base: 'shadowBorderPrimary',
          hover: 'shadowBorderPrimaryStrong',
          active: 'shadowBorderPrimaryStrong',
        }}
        color="colorTextInverse"
        width={fullWidth ? '100%' : 'auto'}
        ref={ref}
        {...ButtonStyleMapping[buttonState]}
      >
        {children}
      </TestBox>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
