/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useState } from 'react';
import logo from 'public/logo.png';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

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
    <main className=" max-w-[600px] flex flex-col justify-between  items-between h-screen mx-auto px-2 py-6 ">
      <div className="max-h-48 h-48 w-full mb-18 overflow-hidden ">
        <div className="h-12 w-12">
          <Image
            className="h-full w-full object-cover object-center"
            src={logo}
          />
        </div>
      </div>
      <div className="w-full h-full ">
        <div className="text-2xl px-4 font-semibold text-white mb-2 ">
          Mail Verification
        </div>
        <form
          onSubmit={handleSubmit}
          className=" mx-auto rounded-lg h-full  w-full  px-4 py-4"
        >
          <div className="mb-8">
            {/* <label htmlFor="email" className="block mb-2 text-lg">
              Email Address
            </label> */}
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 text-xl text-white  border-b-4 border-[#5392c6] placeholder-[#5392c6]  focus:outline-none  bg-transparent"
              required
            />
          </div>
          <div className="mb-8 relative">
            {/* <label htmlFor="password" className="block mb-2 text-lg">
              Password
            </label> */}
            <input
              placeholder="Password"
              type={show ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 text-xl text-white  border-b-4 border-[#5392c6] placeholder-[#5392c6] focus:outline-none  bg-transparent mb-"
              required
            />
            <div
              className="absolute top-6 right-4 cursor-pointer text-gray-500"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <AiFillEyeInvisible size={24} fill="#6099cc" />
              ) : (
                <AiFillEye size={24} fill="#6099cc" />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#1f5d96]  w-full text-[#6099cc] px-4 py-2 font-bold rounded-md hover:text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
