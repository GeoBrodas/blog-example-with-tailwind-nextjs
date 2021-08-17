import Head from 'next/head';
import { Fragment } from 'react';

import Hero from '@/components/Home-page/Hero/Hero';
import FeaturedPosts from '@/components/Home-page/FeaturedPosts/FeaturedPosts';

const DUMMY_POSTS = [
  {
    title: 'Gettign Started with typeScript',
    excerpt:
      'TypeScript is a superset to Javascript, as it acts like a compiler to detect early errors',
    image: 'getting-started-with-typescript.png',
    date: '2021-08-17',
    slug: 'getting-started-with-typescript',
  },
  {
    title: 'Gettign Started with typeScript',
    excerpt:
      'TypeScript is a superset to Javascript, as it acts like a compiler to detect early errors',
    image: 'getting-started-with-typescript.png',
    date: '2021-08-17',
    slug: 'getting-started-with-typescript',
  },
  {
    title: 'Gettign Started with typeScript',
    excerpt:
      'TypeScript is a superset to Javascript, as it acts like a compiler to detect early errors',
    image: 'getting-started-with-typescript.png',
    date: '2021-08-17',
    slug: 'getting-started-with-typescript',
  },
];

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
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
