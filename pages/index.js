import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BlogPop v2.0</title>
        <meta
          type="description"
          content="BlogPop by Georgey, the latest and the hottest curated articles"
        ></meta>
      </Head>
      <nav className="">
        <a>
          <h2>BlogPop v2.0</h2>
        </a>
      </nav>
    </div>
  );
}
function HomePage() {
  return (
    <div>
      <h3>Welcome to BlogPop v2.0</h3>
    </div>
  );
}

export default HomePage;
