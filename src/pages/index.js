import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <h1>Index Page</h1>
      <p>
        {t('hello')}
      </p>
    </>
  )
}
