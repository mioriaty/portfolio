import { Facebook, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main>
      <div className="w-full flex h-screen flex-col sm:flex-row">
        <div className="fixed left-0 sm:hidden col-span-2 row-span-1 flex justify-end items-start z-30 w-full">
          <nav className="flex items-center bg-beige-100">
            <Link
              href="https://github.com/mioriaty"
              target="_blank"
              rel="noopener noreferrer"
              className="bd bd-right bd-bottom bd-left p-2.5 w-10 block text-center hover:bg-green-signature transition-colors"
            >
              <Github size={16} className="mx-auto" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/duongwtoo"
              target="_blank"
              rel="noopener noreferrer"
              className="bd bd-bottom bd-right p-2.5 w-10 block text-center hover:bg-green-signature transition-colors"
            >
              <Linkedin size={16} className="mx-auto" />
            </Link>
            <Link
              href="https://www.facebook.com/jin.beo.5"
              target="_blank"
              rel="noopener noreferrer"
              className="bd bd-bottom bd-right p-2.5 w-10 block text-center hover:bg-green-signature transition-colors"
            >
              <Facebook size={16} className="mx-auto" />
            </Link>
          </nav>
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <div className="h-64 flex justify-center items-center sm:justify-end sm:items-end flex-col pb-7 sm:pr-10">
            <div className="relative">
              <h1 className="text-8xl leading-tight">
                <span className="tracking-tight font-fleur-de-leah">D</span>
                <span className="tracking-tight italic">uong</span>
              </h1>
              <p className="font-medium">
                <span className="green-signature">__</span>Lost in though, but finding peace
                <span className="green-signature">__</span>
              </p>
            </div>
          </div>
          <div className="hidden sm:grid grid-rows-[100px_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr_80px] flex-1">
            <div className="bd bd-top col-start-1 col-span-4 uppercase flex justify-center items-center text-xl">
              <p className="font-semibold">You know nothing, Jon Snow</p>
            </div>
            <div className="bd bd-top bd-right col-start-1 col-span-1 row-start-2 row-span-3"></div>
            <div className="bd bd-top bd-right row-start-2 col-start-2 col-span-2 row-span-3 px-8">
              <div className="">
                <Image
                  src="https://res.cloudinary.com/dmdjzkm7s/image/upload/v1759225691/__yrv8x9.jpg"
                  className="mt-8 mb-4 -ml-24 h-[300px] object-cover"
                  alt="sample"
                  width="1000"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-xl  bg-green-signature w-fit">I am</p>
                <p className="font-medium">__a lazy perfectionist, if that makes sense__</p>
              </div>
            </div>
            <div className="bd bd-top row-start-2 col-start-4 row-span-3 uppercase text-vert flex justify-center items-center font-semibold">
              I'm too old to care
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="bd bd-top w-full py-8 flex items-center justify-center">
            <p className="text-xl uppercase font-semibold">You know nothing, Jon Snow</p>
          </div>
          <div className="bd bd-top">
            <Image
              src="https://res.cloudinary.com/dmdjzkm7s/image/upload/v1759225691/__yrv8x9.jpg"
              className=""
              alt="grass-img"
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-8 bd bd-top">
            <p className="text-xl  bg-green-signature w-fit">I am</p>
            <p className="font-medium">__a lazy perfectionist, if that makes sense__</p>
          </div>
          <div className="bd bd-top w-full py-8 flex items-center justify-center">
            <p className="text-xl uppercase font-semibold">I'm too old to care</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 sm:grid grid-rows-[100px_1fr_1fr] grid-cols-2">
          <div className="hidden bd bd-left col-span-2 row-span-1 sm:flex justify-end items-start">
            <nav className="flex items-center">
              <Link
                href="https://github.com/mioriaty"
                target="_blank"
                rel="noopener noreferrer"
                className="bd bd-right bd-bottom bd-left p-2.5 w-20 block text-center hover:bg-green-signature transition-colors"
              >
                <Github size={16} className="mx-auto" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/duongwtoo"
                target="_blank"
                rel="noopener noreferrer"
                className="bd bd-bottom bd-right p-2.5 w-20 block text-center hover:bg-green-signature transition-colors"
              >
                <Linkedin size={16} className="mx-auto" />
              </Link>
              <Link
                href="https://www.facebook.com/jin.beo.5"
                target="_blank"
                rel="noopener  noreferrer"
                className="bd bd-bottom bd-right p-2.5 w-20 block text-center hover:bg-green-signature transition-colors"
              >
                <Facebook size={16} className="mx-auto" />
              </Link>
            </nav>
          </div>
          <div className="border-b-0 border-t border-black sm:border-t sm:border-r sm:border-l col-start-1 col-span-1 row-span-2 flex items-center overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dmdjzkm7s/image/upload/v1759218817/123_z1m3ba.jpg"
              className="h-full object-cover"
              alt="hero image"
              width="800"
              height="1200"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="bd bd-top py-10 flex text-right flex-col sm:hidden pr-8">
            <p className="text-2xl font-medium">
              <span className="tracking-tighter">E</span>njoying
            </p>
            <span className="font-medium">__being enough__</span>
          </div>
          <div className="border-t sm:border-b col-start-2 col-span-1 row-span-1 border-black">
            <div className="p-6 sm:px-8 flex-row sm:flex-col sm:py-10 m-auto sm:mt-8 sm:p-0 w-fit text-center h-full">
              <p className="uppercase bg-green-signature text-2xl">I'm not lazy</p>
              <p className="font-medium">__Just saving my energy for sunsets__</p>
            </div>
          </div>
          <div className="hidden col-start-2 col-span-1 row-span-1 sm:flex items-center">
            <div className="ml-4">
              <p className="text-2xl font-medium">
                <span className="tracking-tighter">E</span>njoying
              </p>
              <span className="font-medium">__being enough__</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
