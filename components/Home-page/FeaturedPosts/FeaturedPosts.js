import PostCard from '@/components/ui/Post-card';

export default function FeaturedPosts(props) {
  const { posts } = props;
  //console.log(posts);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
            All the featured and hot topics from BlogPop
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Featured Posts
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          {posts.map((post) => (
            <PostCard key={post.slug} data={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
