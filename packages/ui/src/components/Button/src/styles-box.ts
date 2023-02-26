import type { StyleProps } from '../../../styles/style-props.css';

export const resetStyles = {
  appearance: 'none',
  display: 'inline-block',
  background: 'none',
  border: 'none',
  margin: '$space0',
  outline: 'none',
  position: 'relative',
  textDecoration: 'none',
} satisfies StyleProps;

export const baseStyles = {
  borderRadius: '$borderRadius30',
  fontFamily: '$fontFamilyInter',
  fontSize: '$fontSize20',
  fontWeight: '$fontWeightSemiBold',
  lineHeight: '$lineHeight20',
  paddingBottom: '$space20',
  paddingLeft: '$space30',
  paddingRight: '$space30',
  paddingTop: '$space20',
  textAlign: 'center',
  transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
} satisfies StyleProps;

export const defaultStyles = {
  cursor: 'default',
} satisfies StyleProps;

export const loadingStyles = {
  cursor: 'wait',
} satisfies StyleProps;

export const disabledStyles = {
  cursor: 'not-allowed',
} satisfies StyleProps;
