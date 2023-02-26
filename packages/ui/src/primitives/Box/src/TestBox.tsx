import type { AllHTMLAttributes, ElementType } from 'react';
import { createElement } from 'react';
import classnames from 'classnames';
import type { Sprinkles } from '../../../styles/test-style-props.css';
import { sprinkles } from '../../../styles/test-style-props.css';

export interface TestBoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      | 'as'
      | 'className'
      | 'content'
      | 'height'
      | 'translate'
      | 'color'
      | 'width'
      | 'cursor'
    >,
    Sprinkles {
  as?: ElementType;
  className?: Parameters<typeof classnames>[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
}

export const TestBox = ({
  as = 'div',
  className,
  appearance,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  position,
  top,
  bottom,
  left,
  right,
  inset,
  backgroundColor,
  background,
  color,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  maxWidth,
  minWidth,
  transition,
  overflow,
  textDecoration,
  boxShadow,
  lineHeight,
  border,
  outline,
  fontFamily,
  fontSize,
  fontWeight,
  ...restProps
}: TestBoxProps): JSX.Element => {
  const atomClasses = classnames(
    sprinkles({
      appearance,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      flexGrow,
      flexShrink,
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
      position,
      top,
      bottom,
      left,
      right,
      inset,
      backgroundColor,
      background,
      color,
      width,
      zIndex,
      opacity,
      pointerEvents,
      cursor,
      textAlign,
      maxWidth,
      minWidth,
      transition,
      overflow,
      textDecoration,
      boxShadow,
      lineHeight,
      border,
      outline,
      fontFamily,
      fontSize,
      fontWeight,
    }),
    className
  );

  return createElement(as, { className: atomClasses, ...restProps });
};
