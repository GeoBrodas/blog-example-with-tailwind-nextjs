import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Image from 'next/image';

export default function PostContent(props) {
  const { slug, content, title, image } = props.data;
  // console.log(slug);
  const imagePath = `/posts/${slug}/${image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/posts/${slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div>
            <Image
              src={`/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          language={language}
          styles={dracula}
          children={children}
        />
      );
    },
  };

  return (
    <article>
      <Head>
        <title>{title}</title>
      </Head>
      <PostHeader slug={slug} title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}
