import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MyCockpit - App</title>
        <link rel="icon" href="/favicon_test_1.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
