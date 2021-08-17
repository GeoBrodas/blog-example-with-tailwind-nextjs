import { Fragment, useState } from 'react';
import Ham from '../icons/ham';

import Link from 'next/link';

export default function Layout(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Fragment>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-400 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link passhref href="/">
              <span className="cursor-pointer text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
                BlogPop v2.0
              </span>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              aria-label="Ham-menu"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Ham />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link passhref href="/posts">
                  <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2 cursor-pointer">
                    Posts
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link passhref href="/contact">
                  <span className="ml-2 cursor-pointer text-white px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="m-10">{props.children}</main>
    </Fragment>
  );
}
