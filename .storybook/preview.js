import '../packages/ui/src/styles/global.css';
import { darkTheme } from '../packages/ui/src/themes/darkTheme.css';
import { baseTheme } from '../packages/ui/src/themes/baseTheme.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'baseTheme',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['baseTheme', 'anotherTheme'],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    return (
      <div className={theme === 'darkTheme' ? darkTheme : baseTheme}>
        <Story />
      </div>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
