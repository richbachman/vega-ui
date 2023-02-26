import StyleDictionary from 'style-dictionary-utils';
import type {
  TransformedToken,
  TransformedTokens,
} from 'style-dictionary-utils';
import _ from 'lodash';

const w3cTokenJsonParser = {
  pattern: /\.json|\.tokens\.json|\.tokens$/,
  parse: ({ contents }: { contents: string }) => {
    const preparedContent = (contents || '{}')
      .replace(/"\$?value":/g, '"value":')
      .replace(/"\$?description":/g, '"comment":');
    return JSON.parse(preparedContent);
  },
};

const groupedTokensByTerm = (
  tokenGroup: string,
  tokens: TransformedTokens | TransformedToken,
  searchTerm: string,
  prefix: string,
  empty?: boolean
) =>
  `export const ${tokenGroup} = {\n` +
  Object.keys(tokens)
    // @ts-ignore
    .map((key) => {
      if (key.includes(searchTerm)) {
        let prop = tokens[key];
        if (empty) {
          return `  ${_.camelCase(`${prefix}-${key}`)}: "",\n`;
        }
        return `  ${_.camelCase(`${prefix}-${key}`)}: "${prop.value}",\n`;
      }
    })
    .join('') +
  '};';

const groupedTokensByTermTypes = (
  tokenGroup: string,
  tokens: TransformedTokens | TransformedToken,
  searchTerm: string,
  prefix: string,
  empty?: boolean
) =>
  `export declare const ${tokenGroup} : {\n` +
  Object.keys(tokens)
    // @ts-ignore
    .map((key) => {
      if (key.includes(searchTerm)) {
        let prop = tokens[key];
        if (empty) {
          return `  ${_.camelCase(`${prefix}-${key}`)}: string;\n`;
        }
        return `  ${_.camelCase(`${prefix}-${key}`)}: "${prop.value}";\n`;
      }
    })
    .join('') +
  '};';

const groupedToken = (
  tokenGroup: string,
  tokens: TransformedTokens | TransformedToken,
  prefix: string,
  empty?: boolean
) =>
  `export const ${tokenGroup} = {\n` +
  Object.keys(tokens)
    .map((key) => {
      let prop = tokens[key];
      if (empty) {
        return `  ${_.camelCase(`${prefix}-${key}`)}: "",\n`;
      }
      return `  ${_.camelCase(`${prefix}-${key}`)}: "${prop.value}",\n`;
    })
    .join('') +
  '};';

const groupedTokenTypes = (
  tokenGroup: string,
  tokens: TransformedTokens | TransformedToken,
  prefix: string,
  empty?: boolean
) =>
  `export declare const ${tokenGroup} : {\n` +
  Object.keys(tokens)
    .map((key) => {
      let prop = tokens[key];
      if (empty) {
        return `  ${_.camelCase(`${prefix}-${key}`)}: string;\n`;
      }
      return `  ${_.camelCase(`${prefix}-${key}`)}: "${prop.value}";\n`;
    })
    .join('') +
  '};';

StyleDictionary.registerFormat({
  name: 'ts/grouped',
  formatter: ({ dictionary }) => {
    const tokens = Object.keys(dictionary.properties)
      .map((key) => {
        return Object.keys(dictionary.properties[key])
          .map((anotherKey) => {
            let prop = dictionary.properties[key][anotherKey];
            return `export const ${_.camelCase(key + '-' + anotherKey)} = "${
              prop.value
            }";\n`;
          })
          .join('');
      })
      .join('');

    const backgroundColors = groupedTokensByTerm(
      'backgroundColors',
      dictionary.properties.color,
      'background',
      'color'
    );

    const emptyStringBackgroundColors = groupedTokensByTerm(
      'emptyStringBackgroundColors',
      dictionary.properties.color,
      'background',
      'color',
      true
    );

    const borderColors = groupedTokensByTerm(
      'borderColors',
      dictionary.properties.color,
      'border',
      'color'
    );

    const emptyStringBorderColors = groupedTokensByTerm(
      'emptyStringBorderColors',
      dictionary.properties.color,
      'border',
      'color',
      true
    );

    const textColors = groupedTokensByTerm(
      'textColors',
      dictionary.properties.color,
      'text',
      'color'
    );

    const emptyStringTextColors = groupedTokensByTerm(
      'emptyStringTextColors',
      dictionary.properties.color,
      'text',
      'color',
      true
    );

    const borderWidths = groupedToken(
      'borderWidths',
      dictionary.properties.borderWidth,
      'borderWidth'
    );

    const emptyStringBorderWidths = groupedToken(
      'emptyStringBorderWidths',
      dictionary.properties.borderWidth,
      'borderWidth',
      true
    );

    const fontFamilies = groupedToken(
      'fontFamilies',
      dictionary.properties.fontFamily,
      'fontFamily'
    );

    const emptyStringFontFamilies = groupedToken(
      'emptyStringFontFamilies',
      dictionary.properties.fontFamily,
      'fontFamily',
      true
    );

    const fontSizes = groupedToken(
      'fontSizes',
      dictionary.properties.fontSize,
      'fontSize'
    );

    const emptyStringFontSizes = groupedToken(
      'emptyStringFontSizes',
      dictionary.properties.fontSize,
      'fontSize',
      true
    );

    const fontWeights = groupedToken(
      'fontWeights',
      dictionary.properties.fontWeight,
      'fontWeight'
    );

    const emptyStringFontWeights = groupedToken(
      'emptyStringFontWeights',
      dictionary.properties.fontWeight,
      'fontWeight',
      true
    );

    const lineHeights = groupedToken(
      'lineHeights',
      dictionary.properties.lineHeight,
      'lineHeight'
    );

    const emptyStringLineHeights = groupedToken(
      'emptyStringLineHeights',
      dictionary.properties.lineHeight,
      'lineHeight',
      true
    );

    const borderRadii = groupedToken(
      'borderRadii',
      dictionary.properties.borderRadius,
      'borderRadius'
    );

    const emptyStringBorderRadii = groupedToken(
      'emptyStringBorderRadii',
      dictionary.properties.borderRadius,
      'borderRadius',
      true
    );

    const shadows = groupedToken(
      'shadows',
      dictionary.properties.shadow,
      'shadow'
    );

    const emptyStringShadows = groupedToken(
      'emptyStringShadows',
      dictionary.properties.shadow,
      'shadow',
      true
    );

    const spacings = groupedToken(
      'spacings',
      dictionary.properties.space,
      'space'
    );

    const emptyStringSpacings = groupedToken(
      'emptyStringSpacings',
      dictionary.properties.space,
      'space',
      true
    );

    return `${tokens}${backgroundColors}\n${borderColors}\n${borderWidths}\n${fontFamilies}\n${fontSizes}\n${fontWeights}\n${lineHeights}\n${textColors}\n${borderRadii}\n${shadows}\n${spacings}\n${emptyStringBackgroundColors}\n${emptyStringBorderColors}\n${emptyStringBorderWidths}\n${emptyStringFontFamilies}\n${emptyStringFontSizes}\n${emptyStringFontWeights}\n${emptyStringLineHeights}\n${emptyStringTextColors}\n${emptyStringBorderRadii}\n${emptyStringShadows}\n${emptyStringSpacings}\n`;
  },
});

StyleDictionary.registerFormat({
  name: 'ts/grouped-declarations',
  formatter: ({ dictionary }) => {
    const tokens = Object.keys(dictionary.properties)
      .map((key) => {
        return Object.keys(dictionary.properties[key])
          .map((anotherKey) => {
            let prop = dictionary.properties[key][anotherKey];
            return `export declare const ${_.camelCase(
              key + '-' + anotherKey
            )} : "${prop.value}";\n`;
          })
          .join('');
      })
      .join('');

    const backgroundColors = groupedTokensByTermTypes(
      'backgroundColors',
      dictionary.properties.color,
      'background',
      'color'
    );

    const emptyStringBackgroundColors = groupedTokensByTermTypes(
      'emptyStringBackgroundColors',
      dictionary.properties.color,
      'background',
      'color',
      true
    );

    const borderColors = groupedTokensByTermTypes(
      'borderColors',
      dictionary.properties.color,
      'border',
      'color'
    );

    const emptyStringBorderColors = groupedTokensByTermTypes(
      'emptyStringBorderColors',
      dictionary.properties.color,
      'border',
      'color',
      true
    );

    const textColors = groupedTokensByTermTypes(
      'textColors',
      dictionary.properties.color,
      'text',
      'color'
    );

    const emptyStringTextColors = groupedTokensByTermTypes(
      'emptyStringTextColors',
      dictionary.properties.color,
      'text',
      'color',
      true
    );

    const borderWidths = groupedTokenTypes(
      'borderWidths',
      dictionary.properties.borderWidth,
      'borderWidth'
    );

    const emptyStringBorderWidths = groupedTokenTypes(
      'emptyStringBorderWidths',
      dictionary.properties.borderWidth,
      'borderWidth',
      true
    );

    const fontFamilies = groupedTokenTypes(
      'fontFamilies',
      dictionary.properties.fontFamily,
      'fontFamily'
    );

    const emptyStringFontFamilies = groupedTokenTypes(
      'emptyStringFontFamilies',
      dictionary.properties.fontFamily,
      'fontFamily',
      true
    );

    const fontSizes = groupedTokenTypes(
      'fontSizes',
      dictionary.properties.fontSize,
      'fontSize'
    );

    const emptyStringFontSizes = groupedTokenTypes(
      'emptyStringFontSizes',
      dictionary.properties.fontSize,
      'fontSize',
      true
    );

    const fontWeights = groupedTokenTypes(
      'fontWeights',
      dictionary.properties.fontWeight,
      'fontWeight'
    );

    const emptyStringFontWeights = groupedTokenTypes(
      'emptyStringFontWeights',
      dictionary.properties.fontWeight,
      'fontWeight',
      true
    );

    const lineHeights = groupedTokenTypes(
      'lineHeights',
      dictionary.properties.lineHeight,
      'lineHeight'
    );

    const emptyStringLineHeights = groupedTokenTypes(
      'emptyStringLineHeights',
      dictionary.properties.lineHeight,
      'lineHeight',
      true
    );

    const borderRadii = groupedTokenTypes(
      'borderRadii',
      dictionary.properties.borderRadius,
      'borderRadius'
    );

    const emptyStringBorderRadii = groupedTokenTypes(
      'emptyStringBorderRadii',
      dictionary.properties.borderRadius,
      'borderRadius',
      true
    );

    const shadows = groupedTokenTypes(
      'shadows',
      dictionary.properties.shadow,
      'shadow'
    );

    const emptyStringShadows = groupedTokenTypes(
      'emptyStringShadows',
      dictionary.properties.shadow,
      'shadow',
      true
    );

    const spacings = groupedTokenTypes(
      'spacings',
      dictionary.properties.space,
      'space'
    );

    const emptyStringSpacings = groupedTokenTypes(
      'emptyStringSpacings',
      dictionary.properties.space,
      'space',
      true
    );

    return `${tokens}${backgroundColors}\n${borderColors}\n${borderWidths}\n${fontFamilies}\n${fontSizes}\n${fontWeights}\n${lineHeights}\n${textColors}\n${borderRadii}\n${shadows}\n${spacings}\n${emptyStringBackgroundColors}\n${emptyStringBorderColors}\n${emptyStringBorderWidths}\n${emptyStringFontFamilies}\n${emptyStringFontSizes}\n${emptyStringFontWeights}\n${emptyStringLineHeights}\n${emptyStringTextColors}\n${emptyStringBorderRadii}\n${emptyStringShadows}\n${emptyStringSpacings}\n`;
  },
});

StyleDictionary.registerParser(w3cTokenJsonParser);

StyleDictionary.registerFileHeader({
  name: 'customFileHeader',
  fileHeader: (defaultMessage) => {
    return defaultMessage;
  },
});

const myStyleDictionary = StyleDictionary.extend({
  source: ['src/**/*.tokens.json'],
  platforms: {
    json: {
      transformGroup: 'web',
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'variables.json',
          format: 'json/nested',
          options: {
            fileHeader: 'customFileHeader',
          },
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'customFileHeader',
          },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
          options: {
            fileHeader: 'customFileHeader',
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          filter: 'isSource',
          destination: 'index.js',
          format: 'ts/grouped',
          options: {
            fileHeader: 'customFileHeader',
          },
        },
        {
          filter: 'isSource',
          destination: 'index.d.ts',
          format: 'ts/grouped-declarations',
          options: {
            fileHeader: 'customFileHeader',
          },
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();
