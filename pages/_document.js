import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='tr'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Yeseva+One&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}