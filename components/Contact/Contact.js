import { useState } from 'react';
import ContactLayout from './ContactLayout';

export default function ContactForm() {
  const [enteredEmail, setEmail] = useState('');
  const [enteredName, setName] = useState('');
  const [enteredMessage, setMessage] = useState('');

  function messageHandler(event) {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEmail('');
    setName('');
    setMessage('');
    // I skipped adding to a database
  }

  return (
    <ContactLayout>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form onSubmit={messageHandler} className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                required
                value={enteredName}
                onChange={(event) => setName(event.target.value)}
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                required
                value={enteredEmail}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                required
                value={enteredMessage}
                onChange={(event) => setMessage(event.target.value)}
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </ContactLayout>
  );
}
