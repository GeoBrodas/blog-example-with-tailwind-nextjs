import { Fragment } from 'react';
import AllPosts from '@/components/All-posts/all-posts';
import Head from 'next/head';

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

function AllPostsPage(props) {
  // const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="BlogPop, a blog page maintained by Georgey: a web developer hailing from Goa, India!"
        />
      </Head>
      <AllPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default AllPostsPage;
