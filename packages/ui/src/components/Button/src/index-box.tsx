import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Box } from '../../../primitives/Box/src/index';
import { PrimaryButton } from './PrimaryButton-box';
// import { SecondaryButton } from './SecondaryButton';
import type {
  ButtonContentsProps,
  DirectButtonPropsWithBox,
  ButtonProps,
  ButtonStates,
  ButtonVariants,
} from './types';

const handlePropValidation = ({
  as,
  href,
  tabIndex,
  variant,
  children,
  disabled,
  loading,
  pressed,
}: ButtonProps): void => {
  const hasHref = href != null && href !== '';
  const hasTabIndex = tabIndex != null;

  // Link validation
  if (as !== 'a' && hasHref) {
    throw new Error(
      `[Button] You cannot pass href into a button without the 'a' tag.  Use 'as="a"'.`
    );
  }
  if (as === 'a') {
    if (!hasHref) {
      throw new Error(`[Button] Missing href prop for link button.`);
    }
    if (
      variant !== 'primary' &&
      variant !== 'secondary' &&
      variant !== 'reset' &&
      variant !== 'inverse'
    ) {
      throw new Error(
        `[Button] <Button as="a"> only works with the following variants: primary and secondary.`
      );
    }
    if (disabled || loading) {
      throw new Error(
        `[Button] <Button as="a"> cannot be disabled or loading.`
      );
    }
  }

  // Child validation
  if (children == null) {
    throw new Error(`[Button] Must have non-null children.`);
  }

  // TabIndex validation
  if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1)) {
    throw new Error(`[Button] tabIndex must be 0 or -1.`);
  }

  // Toggle button validation
  if (pressed && !(variant === 'secondary')) {
    throw new Error(
      `[Button] pressed can only be used with "secondary" variants.`
    );
  }
};

const getButtonState = (
  disabled?: boolean,
  loading?: boolean
): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

const getButtonComponent = (
  variant: ButtonVariants
): React.FunctionComponent<DirectButtonPropsWithBox> => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (variant) {
    // case 'secondary': {
    //   return SecondaryButton;
    // }
    // eslint-disable-next-line unicorn/no-useless-switch-case
    case 'primary':
    default: {
      return PrimaryButton;
    }
  }
};

const ButtonContents: React.FC<ButtonContentsProps> = ({
  buttonState,
  children,
  showLoading,
}) => {
  return (
    <>
      <Box
        as="span"
        display="flex"
        justifyContent="center"
        textDecoration="inherit"
        opacity={buttonState === 'loading' ? 0 : 1}
        columnGap="$space20"
        alignItems="center"
      >
        {children}
      </Box>
      {showLoading ? (
        <Box
          as="span"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          lineHeight="$lineHeight30"
        >
          <BeatLoader color="currentColor" size={6} />
        </Box>
      ) : null}
    </>
  );
};

ButtonContents.displayName = 'ButtonContents';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref): JSX.Element => {
    const {
      as = 'button',
      variant = 'primary',
      children,
      disabled,
      loading,
      ...rest
    } = props;

    handlePropValidation({ ...props });

    const buttonState = getButtonState(disabled, loading);
    const showLoading = buttonState === 'loading';
    const showDisabled = buttonState !== 'default';
    const ButtonComponent = getButtonComponent(variant);

    return (
      <ButtonComponent
        {...rest}
        as={as}
        aria-busy={buttonState === 'loading' ? 'true' : 'false'}
        buttonState={buttonState}
        disabled={showDisabled}
        variant={variant}
        ref={ref}
      >
        <ButtonContents buttonState={buttonState} showLoading={showLoading}>
          {children}
        </ButtonContents>
      </ButtonComponent>
    );
  }
);

Button.displayName = 'Button';

export { Button };

export { type ButtonProps } from './types';
