import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full lg:pl-10 md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="a prfile picture of Georgey"
            src="/avataaars.png"
            width={400}
            height={450}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi there! I'm Georgey!
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm Georgey, a Web Developer hailing from India! I love Web
            development ever since I started learning it in the pandemic. I just
            started to grow love in coding.
          </p>
        </div>
      </div>
    </section>
  );
}
