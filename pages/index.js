import Head from 'next/head';
import { Fragment } from 'react';

import Hero from '@/components/Home-page/Hero/Hero';
import FeaturedPosts from '@/components/Home-page/FeaturedPosts/FeaturedPosts';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home: BlogPop v2.0</title>
        <meta
          name="description"
          content="BlogPop, a blog page maintained by Georgey: a web developer hailing from Goa, India!"
        />
      </Head>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;
