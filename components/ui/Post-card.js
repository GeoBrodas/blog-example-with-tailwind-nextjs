import Link from 'next/link';
import Image from 'next/image';

export default function PostCard(props) {
  // console.log(props);
  const { title, excerpt, image, date, slug } = props.data; //change to props.post as it will be a object receieved from getStaticProps
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const filePath = `/posts/${slug}/${image}`;

  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        </div>
        <Image
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          src={filePath}
          alt={title}
          width={720}
          height={400}
          layout="responsive"
        />
        <div className="flex-grow mt-2">
          <p className="leading-relaxed text-base">{excerpt}</p>
          <p className="leading-relaxed text-base">{formattedDate}</p>
          <Link
            passhref
            href="/"
            className="mt-3 text-red-500 inline-flex items-center"
          >
            <a className="flex flex-row mt-2 italic">
              <p className="text-red-300">Read more..</p>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2 mt-1 text-red-300"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
