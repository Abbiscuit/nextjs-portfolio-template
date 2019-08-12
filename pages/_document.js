import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Simple NextJS Portfolio Template Page"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="abbiscuitcom" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
