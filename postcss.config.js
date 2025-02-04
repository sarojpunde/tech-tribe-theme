module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-extend': {},
    'postcss-mixins': {},
    tailwindcss: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/theme/**/*.{liquid,js}'],
      defaultExtractor: (content) => content.match(/[\w-/:[\]]+(?<!:)/g) || [],
      safelist: {
        greedy: [/^slick/, /^fa/],
      },
    },
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
};
