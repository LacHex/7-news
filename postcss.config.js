module.exports = {
  plugins: [
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',
    'postcss-flexbugs-fixes',
    '@thedutchcoder/postcss-rem-to-px',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
};
