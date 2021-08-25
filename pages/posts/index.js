import { Fragment } from 'react';
import AllPosts from '@/components/All-posts/all-posts';
import Head from 'next/head';
import { getAllPosts } from '@/helpers/posts-util';

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

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
