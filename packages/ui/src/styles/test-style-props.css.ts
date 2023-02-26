// import mapValues from 'lodash/mapValues';
import type { ConditionalValue } from '@vanilla-extract/sprinkles';
import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';
// import { calc } from '@vanilla-extract/css-utils';
// import { breakpoints } from '../../themeUtils';
import { vars } from '../themes/contract.css';

// const space = vars.spacing;
// export type Space = keyof typeof space;

// const negativeSpace = {
//   ['-xsmall']: `${calc(space.xsmall).negate()}`,
//   ['-small']: `${calc(space.small).negate()}`,
//   ['-medium']: `${calc(space.medium).negate()}`,
//   ['-large']: `${calc(space.large).negate()}`,
//   ['-xlarge']: `${calc(space.xlarge).negate()}`,
//   ['-xxlarge']: `${calc(space.xxlarge).negate()}`,
//   ['-xxxlarge']: `${calc(space.xxxlarge).negate()}`,
// };

// const margins = {
//   ...space,
//   ...negativeSpace,
// };

const responsiveProperties = defineProperties({
  // conditions: mapValues(breakpoints, (bp) =>
  //   bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` },
  // ),
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    columnGap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    lineHeight: vars.lineHeight,
    pointerEvents: ['none', 'auto'],
    overflow: ['hidden'],
    opacity: [0, 1],
    textAlign: ['left', 'center', 'right'],
    minWidth: [0],
    maxWidth: ['100%'],
    transition: {
      slow: 'transform .3s ease, opacity .3s ease',
      fast: 'transform .15s ease, opacity .15s ease',
      button: 'background-color 0.5s ease, box-shadow 0.5s ease',
    },
    borderBottomWidth: vars.borderWidth,
    borderLeftWidth: vars.borderWidth,
    borderRightWidth: vars.borderWidth,
    borderTopWidth: vars.borderWidth,
    borderBottomStyle: ['none', 'solid'],
    borderLeftStyle: ['none', 'solid'],
    borderRightStyle: ['none', 'solid'],
    borderTopStyle: ['none', 'solid'],
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    borderWidth: [
      'borderBottomWidth',
      'borderLeftWidth',
      'borderRightWidth',
      'borderTopWidth',
    ],
    borderStyle: [
      'borderBottomStyle',
      'borderLeftStyle',
      'borderRightStyle',
      'borderTopStyle',
    ],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

export const lightMode = 'light';
export const darkMode = 'dark';

const interactiveProperties = defineProperties({
  conditions: {
    base: {},
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'base',
  properties: {
    background: ['none'],
    backgroundColor: vars.backgroundColor,
    color: vars.textColor,
    borderBottomColor: vars.borderColor,
    borderLeftColor: vars.borderColor,
    borderRightColor: vars.borderColor,
    borderTopColor: vars.borderColor,
    boxShadow: vars.boxShadow,
  },
  shorthands: {
    borderColor: [
      'borderBottomColor',
      'borderLeftColor',
      'borderRightColor',
      'borderTopColor',
    ],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    appearance: ['none'],
    border: ['none'],
    outline: ['none'],
    flexWrap: ['wrap', 'nowrap'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1],
    width: ['auto', '100%'],
    borderRadius: vars.borderRadius,
    cursor: ['default', 'pointer', 'wait', 'not-allowed'],
    textDecoration: ['none', 'inherit'],
  },
  shorthands: {
    inset: ['top', 'bottom', 'left', 'right'],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  interactiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
