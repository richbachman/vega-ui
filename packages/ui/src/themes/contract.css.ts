import { createThemeContract } from '@vanilla-extract/css';
import {
  emptyStringBackgroundColors,
  emptyStringBorderColors,
  emptyStringBorderWidths,
  emptyStringFontFamilies,
  emptyStringFontSizes,
  emptyStringFontWeights,
  emptyStringLineHeights,
  emptyStringTextColors,
  emptyStringBorderRadii,
  emptyStringShadows,
  emptyStringSpacings,
} from '@vega-ui/design-tokens';

export const vars = createThemeContract({
  backgroundColor: emptyStringBackgroundColors,
  borderColor: emptyStringBorderColors,
  borderRadius: emptyStringBorderRadii,
  borderWidth: emptyStringBorderWidths,
  boxShadow: emptyStringShadows,
  fontFamily: emptyStringFontFamilies,
  fontSize: emptyStringFontSizes,
  fontWeight: emptyStringFontWeights,
  lineHeight: emptyStringLineHeights,
  textColor: emptyStringTextColors,
  space: emptyStringSpacings,
});
