const DUMMY_POSTS = {
  title: 'Gettign Started with typeScript',
  image: 'getting-started-with-typescript.png',
  date: '2021-08-17',
  slug: 'getting-started-with-typescript',
  content: '# First Post',
};

import PostHeader from './PostHeader';

export default function PostContent() {
  const imagePath = `/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article>
      <PostHeader
        slug={DUMMY_POSTS.slug}
        title={DUMMY_POSTS.title}
        image={imagePath}
      />
      {DUMMY_POSTS.content}
    </article>
  );
}
