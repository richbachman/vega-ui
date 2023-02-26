import { createTheme } from '@vanilla-extract/css';
import {
  borderWidths,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  borderRadii,
  spacings,
} from '@vega-ui/design-tokens';
import { vars } from './contract.css';

export const darkTheme = createTheme(vars, {
  backgroundColor: {
    colorBackground: '#0f172a',
    colorBackgroundBody: '#0f172a',
    colorBackgroundSuccess: '#000',
    colorBackgroundPrimary: '#10b981',
    colorBackgroundPrimaryStrong: '#6ee7b7',
    colorBackgroundPrimaryWeak: '#047857',
    colorBackgroundDestructive: '#A020F0',
    colorBackgroundInverse: '#171429',
    colorBackgroundWeak: '#334155',
  },
  borderColor: {
    colorBorderPrimary: '#10b981',
    colorBorderPrimaryStrong: '#6ee7b7',
    colorBorderPrimaryWeak: '#047857',
    colorBorderWeak: '#334155',
  },
  borderRadius: borderRadii,
  borderWidth: borderWidths,
  boxShadow: {
    shadowBorderPrimary: '0 0 0 1px #10b981',
    shadowBorderPrimaryStrong: '0 0 0 1px #6ee7b7',
    shadowBorderPrimaryWeak: '0 0 0 1px #047857',
    shadowBorderWeak: '0 0 0 1px #334155',
  },
  fontFamily: fontFamilies,
  fontSize: fontSizes,
  fontWeight: fontWeights,
  lineHeight: lineHeights,
  textColor: {
    colorTextWeak: '#4b5563',
    colorText: '#fff',
    colorTextSuccess: '#000',
    colorTextPrimary: '#000',
    colorTextDestructive: '#000',
    colorTextInverse: '#0f172a',
  },
  space: spacings,
});
