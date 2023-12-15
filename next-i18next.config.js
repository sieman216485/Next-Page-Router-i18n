/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es', 'fr'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
}
