import React from 'react';
import merge from 'deepmerge';
import { Box } from '../../../primitives/Box/src/index';
import type { StyleProps } from '../../../styles/style-props.css';
import {
  baseStyles,
  defaultStyles,
  disabledStyles,
  loadingStyles,
  resetStyles,
} from './styles-box';
import type { DirectButtonPropsWithBox } from './types';

const disabledPrimaryStyles = merge(disabledStyles, {
  backgroundColor: {
    base: '$colorBackgroundWeak',
    hover: '$colorBackgroundWeak',
    active: '$colorBackgroundWeak',
  },
  boxShadow: {
    base: '$shadowBorderWeak',
    hover: '$shadowBorderWeak',
    active: '$shadowBorderWeak',
  },
} satisfies StyleProps);

const loadingPrimaryStyles = merge(loadingStyles, {
  backgroundColor: {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    base: '$colorBackgroundPrimaryStrong',
    hover: '$colorBackgroundPrimaryStrong',
    active: '$colorBackgroundPrimaryStrong',
  },
  boxShadow: {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    base: '$shadowBorderPrimaryStrong',
    hover: '$shadowBorderPrimaryStrong',
    active: '$shadowBorderPrimaryStrong',
  },
} satisfies StyleProps);

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingPrimaryStyles,
  disabled: disabledPrimaryStyles,
};

const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  DirectButtonPropsWithBox
>(({ buttonState, children, fullWidth, ...props }, ref): JSX.Element => {
  return (
    <Box
      {...props}
      {...resetStyles}
      {...baseStyles}
      backgroundColor={{
        base: '$colorBackgroundPrimary',
        hover: '$colorBackgroundPrimaryStrong',
        active: '$colorBackgroundPrimaryStrong',
      }}
      boxShadow={{
        base: '$shadowBorderPrimary',
        hover: '$shadowBorderPrimaryStrong',
        active: '$shadowBorderPrimaryStrong',
      }}
      color="$colorTextInverse"
      width={fullWidth ? '100%' : 'auto'}
      ref={ref}
      {...ButtonStyleMapping[buttonState]}
    >
      {children}
    </Box>
  );
});

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
