/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      sm: '1023px',
      lg: '1024px',
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '375px',
          paddingLeft: '20px',
          paddingRight: '20px',
          '@screen sm': {
            maxWidth: '375px',
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          '@screen lg': {
            maxWidth: '1024px',
            paddingLeft: '15px',
            paddingRight: '15px',
          },
        },
      })
    },
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
