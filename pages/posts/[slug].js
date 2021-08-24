import PostContent from '@/components/Post-detail/PostContent';
import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  // console.log(router.query);

  return <PostContent />;
}

export default Post;
