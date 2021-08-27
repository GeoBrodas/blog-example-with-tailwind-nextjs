import Head from 'next/head';

export default function ContactLayout(props) {
  return (
    <section className="text-gray-600 body-font relative">
      <Head>
        <title>Contact me!</title>
      </Head>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Me!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Drop in a message and I'll get to you soon!
          </p>
        </div>
        {props.children}
      </div>
    </section>
  );
}
