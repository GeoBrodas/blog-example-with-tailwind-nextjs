import { Fragment } from 'react';

import PostCard from '../ui/Post-card';
import PostGrid from '../ui/Post-grid';

export default function AllPosts(props) {
  const { posts } = props;
  return (
    <Fragment>
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          All Posts
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Your favourite curated list of posts from Georgey
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
        </div>
      </div>
      <PostGrid>
        {posts.map((post, index) => (
          <PostCard key={index} data={post} />
        ))}
      </PostGrid>
    </Fragment>
  );
}
