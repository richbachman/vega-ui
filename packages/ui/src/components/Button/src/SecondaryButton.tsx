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
} from './styles';
import type { DirectButtonProps } from './types';

const disabledPrimaryStyles = merge(disabledStyles, {
  color: '$colorTextWeak',
  backgroundColor: {
    base: '$colorBackgroundBody',
    hover: '$colorBackgroundBody',
    active: '$colorBackgroundBody',
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
    base: '$colorBackgroundPrimaryWeak',
    hover: '$colorBackgroundPrimaryWeak',
    active: '$colorBackgroundPrimaryWeak',
  },
  boxShadow: {
    base: '$shadowBorderPrimaryWeak',
    hover: '$shadowBorderPrimaryWeak',
    active: '$shadowBorderPrimaryWeak',
  },
} satisfies StyleProps);

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingPrimaryStyles,
  disabled: disabledPrimaryStyles,
};

const SecondaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ buttonState, children, fullWidth, ...props }, ref): JSX.Element => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore Expression produces a union type that is too complex to represent.
      <Box
        {...props}
        {...resetStyles}
        {...baseStyles}
        backgroundColor={{
          base: '$colorBackgroundBody',
          hover: '$colorBackgroundPrimaryWeak',
          active: '$colorBackgroundPrimaryWeak',
        }}
        boxShadow={{
          base: '$shadowBorderPrimary',
          hover: '$shadowBorderPrimaryStrong',
          active: '$shadowBorderPrimaryStrong',
        }}
        color="$colorText"
        width={fullWidth ? '100%' : 'auto'}
        ref={ref}
        {...ButtonStyleMapping[buttonState]}
      >
        {children}
      </Box>
    );
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export { SecondaryButton };
