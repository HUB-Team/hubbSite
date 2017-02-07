import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx)
    return props
  }

  render () {
    return (
      <html lang="ro">
        <Head >
          <title> Our Site </title>
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="/static/bower_components/materialize/dist/css/materialize.css" />
          <link rel="stylesheet" href="static/bower_components/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />

          <script src="/static/bower_components/jquery/dist/jquery.js" />
          <script src="/static/bower_components/materialize/dist/js/materialize.js" />
          <NextScript />
        </body>
      </html>
    )
  }
}
