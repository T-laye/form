/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useState } from 'react';
import test from 'public/tianyi-ma-WiONHd_zYI4-unsplash.jpg';
import test2 from 'public/WhatsApp Image 2022-08-31 at 12.09.17 PM.jpeg';
import test3 from 'public/pop val3.jpg';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <main className="bg-white max-w-[600px] flex flex-col justify-center items-center h-screen mx-auto shadow-2xl rounded-xl">
      <div className="max-h-72 w-full bg-black overflow-hidden ">
        <Image
          className="h-full w-full object-cover object-center"
          src={test}
        />
      </div>
      <div className="w-full h-full">
        <form
          onSubmit={handleSubmit}
          className=" mx-auto rounded-lg h-full mt-4  w-full  px-4 py-4"
        >
          <div className="mb-8">
            <label htmlFor="email" className="block mb-2 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-8 relative">
            <label htmlFor="password" className="block mb-2 text-lg">
              Password
            </label>
            <input
              type={show ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <div
              className="absolute top-12 right-2 cursor-pointer text-gray-500"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? 'hide' : 'show'}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
