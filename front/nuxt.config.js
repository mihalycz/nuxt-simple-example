const { resolve } = require('path');

module.exports = {
  mode: 'universal',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  loading: {
    color:  '#423acc',
    height: '100vh'
  },
  css: [
    resolve(__dirname, './assets/scss/main.scss')
  ],
  plugins: [
    { src: '~/plugins/main.js' },
  ],
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        resolve(__dirname, './assets/scss/variables.scss'),
        resolve(__dirname, './assets/scss/mixins.scss'),
      ]
    ]
  ],
  build: {
    extend (config, { isClient }) {
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  }
};
