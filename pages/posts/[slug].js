import PostContent from '@/components/Post-detail/PostContent';
import { getPostData, getPostFileNames } from '@/helpers/posts-util';

function Post(props) {
  return <PostContent data={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context; // ge the [slug] value
  const { slug } = params;
  const fileContent = getPostData(slug);

  return {
    props: {
      post: fileContent,
    },
  };
}

export function getStaticPaths() {
  const fileNames = getPostFileNames();
  const slugs = fileNames.map((name) => name.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slugName) => ({
      params: {
        slug: slugName,
      },
    })),
    fallback: false,
  };
}

export default Post;
