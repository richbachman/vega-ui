import type { BoxProps } from '../../../primitives/Box/src';

type ButtonTypes = 'submit' | 'button' | 'reset';

export type ButtonStates = 'disabled' | 'loading' | 'default';
export type ButtonTabIndexes = 0 | -1;
export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonContentsProps {
  buttonState: ButtonStates;
  children: React.ReactNode;
  showLoading: boolean;
  variant?: ButtonVariants;
}

export type DirectButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    buttonState: ButtonStates;
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    pressed?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: any;
    tabIndex?: ButtonTabIndexes;
    target?: string;
    type?: ButtonTypes;
    variant: ButtonVariants;
  };

export type DirectButtonPropsWithBox = Omit<BoxProps<'button'>, 'as'> &
  Omit<BoxProps<'a'>, 'as'> & {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    buttonState: ButtonStates;
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    pressed?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: any;
    tabIndex?: ButtonTabIndexes;
    target?: string;
    type?: ButtonTypes;
    variant: ButtonVariants;
  };

export type ButtonProps = Omit<BoxProps<'button'>, 'as'> &
  Omit<BoxProps<'a'>, 'as'> & {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    loading?: boolean;
    pressed?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: any;
    tabIndex?: ButtonTabIndexes;
    target?: string;
    type?: ButtonTypes;
    variant: ButtonVariants;
  };
