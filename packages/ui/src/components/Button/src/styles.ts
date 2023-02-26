import type { Sprinkles } from '../../../styles/test-style-props.css';

export const resetStyles = {
  appearance: 'none',
  display: 'inline-block',
  background: 'none',
  border: 'none',
  margin: 'space0',
  outline: 'none',
  position: 'relative',
  textDecoration: 'none',
} satisfies Sprinkles;

export const baseStyles = {
  borderRadius: 'borderRadius30',
  fontFamily: 'fontFamilyInter',
  fontSize: 'fontSize20',
  fontWeight: 'fontWeightSemiBold',
  lineHeight: 'lineHeight20',
  paddingBottom: 'space20',
  paddingLeft: 'space30',
  paddingRight: 'space30',
  paddingTop: 'space20',
  textAlign: 'center',
  transition: 'button',
} satisfies Sprinkles;

export const defaultStyles = {
  cursor: 'default',
} satisfies Sprinkles;

export const loadingStyles = {
  cursor: 'wait',
} satisfies Sprinkles;

export const disabledStyles = {
  cursor: 'not-allowed',
} satisfies Sprinkles;
