//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
]

tailwind.config = {
  theme: {
    extend: {
      colors: {},
      borderRadius: {
        DEFAULT: '0px',
        lg: '0px',
        xl: '0px',
        full: '9999px',
      },
      spacing: {
        gutter: '16px',
        'grid-line': '1px',
        'margin-mobile': '16px',
        unit: '4px',
        'margin-desktop': '32px',
      },
      fontFamily: {
        'body-base': ['Inter'],
        'label-caps': ['JetBrains Mono'],
        'data-mono': ['JetBrains Mono'],
        'display-lg': ['Hanken Grotesk'],
        'headline-md': ['Hanken Grotesk'],
      },
      fontSize: {
        'body-base': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-caps': [
          '11px',
          {
            lineHeight: '1.0',
            letterSpacing: '0.1em',
            fontWeight: '700',
          },
        ],
        'data-mono': [
          '14px',
          {
            lineHeight: '1.4',
            letterSpacing: '0.02em',
            fontWeight: '500',
          },
        ],
        'display-lg': [
          '48px',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'headline-md': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
      },
    },
  },
}
