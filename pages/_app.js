import Layout from '@/components/Layout/layout';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scal=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
