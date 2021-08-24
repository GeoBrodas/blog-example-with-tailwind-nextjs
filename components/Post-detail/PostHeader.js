import Image from 'next/image';

export default function PostHeader(props) {
  const { title, image, slug } = props;
  return (
    <header>
      <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            {`#${slug}`}
          </h2>
          <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
            {title}
          </h1>
        </div>
        <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <div className="inline-flex rounded-lg items-center focus:outline-none">
            <span className="ml-4 flex items-start flex-col leading-none">
              <Image alt={title} width={500} height={250} src={image} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
