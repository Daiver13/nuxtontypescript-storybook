module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    // "vue/html-self-closing": [
    //   error,
    //   {
    //     html: {
    //       void: "any"
    //     }
    //   }
    // ]
  },
  globals: {
    $device: true,
  },
}
