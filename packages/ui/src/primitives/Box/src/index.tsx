import React from 'react';
import { styleProps } from '../../../styles/style-props.css';
import type { StyleProps } from '../../../styles/style-props.css';

export type BoxProps<C extends React.ElementType> = StyleProps &
  React.ComponentPropsWithoutRef<C> & {
    as?: C;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: any;
  };

export const Box = <C extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<C>): JSX.Element => {
  const { className, style, otherProps } = styleProps(props);
  const Component = as || 'div';

  return (
    <Component className={className} style={style} {...otherProps}>
      {children}
    </Component>
  );
};
