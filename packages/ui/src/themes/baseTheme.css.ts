import { createTheme } from '@vanilla-extract/css';
import {
  backgroundColors,
  borderColors,
  borderWidths,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  textColors,
  borderRadii,
  shadows,
  spacings,
} from '@vega-ui/design-tokens';
import { vars } from './contract.css';

export const baseTheme = createTheme(vars, {
  backgroundColor: backgroundColors,
  borderColor: borderColors,
  borderRadius: borderRadii,
  borderWidth: borderWidths,
  boxShadow: shadows,
  fontFamily: fontFamilies,
  fontSize: fontSizes,
  fontWeight: fontWeights,
  lineHeight: lineHeights,
  textColor: textColors,
  space: spacings,
});
