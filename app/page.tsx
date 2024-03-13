'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn, slideInFromBottom, slideInFromLeft } from './utils/motion';
import { LockKeyhole, Search, Instagram } from 'lucide-react';

import doggy from './puppy1.png';
import logoHome from '../public/home-logo.svg';
import logoMobile from '../public/logo-mobile.svg';

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col items-center pt-6 md:pt-10 text-center gap-4">
        <Image
          src={logoHome}
          alt="logo home"
          className="hidden lg:block absolute -z-10 mx-auto w-[70vw] top-48"
        />
        <motion.div
          variants={slideInFromBottom(0.5)}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4"
        >
          <div className="bg-yellowd rounded-full p-3 w-10 h-10 flex items-center justify-center">
            <Search />
          </div>
          <div className="bg-yellowd rounded-full w-40 h-10 flex items-center justify-center">
            menu
          </div>
          <div className="bg-yellowd rounded-full p-3 w-10 h-10 flex items-center justify-center">
            <Instagram />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn(1.0)}
          initial="hidden"
          animate="visible"
          className="h-[70vh] rounded-[70px] w-28 bg-yellowd flex flex-col items-center pt-10 md:pt-6 lg:pt-10"
        >
          <div className="grid grid-cols-1 place-items-center gap-3">
            <div>login</div>
            <div className="border border-black rounded-full p-3 w-10 h-10 flex items-center justify-center">
              <LockKeyhole />
            </div>
            <div>sign up</div>
          </div>
          <div className="relative w-80">
            <Image src={doggy} alt="doggy" className="" />
          </div>
          <div className="relative w-64 md:w-96 -bottom-2">
            <Image
              src={logoMobile}
              alt="logo home"
              className="block lg:hidden absolute"
            />
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromBottom(1.5)}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-xl"
        >
          Making Pet Care Purrfectly Simple.
        </motion.div>
      </main>
    </>
  );
}
