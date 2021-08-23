import { Fragment } from 'react';
import AllPosts from '@/components/All-posts/all-posts';
import Head from 'next/head';

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="BlogPop, a blog page maintained by Georgey: a web developer hailing from Goa, India!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export default AllPostsPage;
