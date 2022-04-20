import Document, { Head, Html, Main, NextScript } from "next/document";

// Escopo basico para o indexHtml
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700;900&family=Sulphur+Point:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}