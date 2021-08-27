import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Image from 'next/image';

export default function PostContent(props) {
  const { slug, content, title, image, excerpt } = props.data;
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
          className="max-w-2xl"
          language={language}
          styles={atomDark}
          children={children}
        />
      );
    },
  };

  return (
    <article>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <PostHeader slug={slug} title={title} image={imagePath} />
      <div className="flex flex-wrap content-center items">
        <ReactMarkdown className="max-w-5xl" components={customRenderers}>
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
