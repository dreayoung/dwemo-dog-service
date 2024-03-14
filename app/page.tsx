'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn, slideInFromBottom } from './utils/motion';
import { LockKeyhole, Search, Instagram } from 'lucide-react';

import doggy from './puppy1.png';
import logoHome from '../public/home-logo.svg';
import logoMobile from '../public/logo-mobile.svg';
import Menu from './components/menu';

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center gap-6">
        <Image
          src={logoHome}
          alt="logo home"
          className="hidden lg:block absolute -z-10 mx-auto w-[70vw]"
        />
        <div className="flex items-center justify-center gap-4">
          <div className="bg-yellowd rounded-full p-3 w-10 h-10 flex items-center justify-center">
            <Search />
          </div>
          <Menu />
          <div className="bg-yellowd rounded-full p-3 w-10 h-10 flex items-center justify-center">
            <Instagram />
          </div>
        </div>
        <div className="h-auto pb-32 lg:pb-10 rounded-[70px] w-24 bg-yellowd flex flex-col items-center pt-10 md:pt-6 lg:pt-10">
          <div className="grid grid-cols-1 place-items-center gap-3 text-sm">
            <div>login</div>
            <div className="border border-black rounded-full p-3 w-10 h-10 flex items-center justify-center">
              <LockKeyhole />
            </div>
            <div>sign up</div>
          </div>
          <motion.div
            variants={slideInFromBottom(0.25)}
            initial="hidden"
            animate="visible"
            className="relative w-60 md:w-72"
          >
            <Image src={doggy} alt="doggy" className="" />
          </motion.div>
          <motion.div
            variants={fadeIn(1.5)}
            initial="hidden"
            animate="visible"
            className="relative w-64 md:w-80"
          >
            <Image
              src={logoMobile}
              alt="logo home"
              className="block lg:hidden absolute"
            />
          </motion.div>
        </div>
        <div className="text-[1rem] md:text-xl md:pt-4 lg:pt-0">
          Making Pet Care Purrfectly Simple.
        </div>
      </main>
    </>
  );
}
