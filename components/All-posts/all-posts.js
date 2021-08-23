import { Fragment } from 'react';

import PostCard from '../ui/Post-card';
import PostGrid from '../ui/Post-grid';

export default function AllPosts() {
  const object = {
    title: 'Gettign Started with typeScript',
    excerpt:
      'TypeScript is a superset to Javascript, as it acts like a compiler to detect early errors',
    image: 'getting-started-with-typescript.png',
    date: '2021-08-17',
    slug: 'getting-started-with-typescript',
  };
  return (
    <Fragment>
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Raw Denim Heirloom Man Braid
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
          pug.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
        </div>
      </div>
      <PostGrid>
        <PostCard data={object} />
      </PostGrid>
    </Fragment>
  );
}
