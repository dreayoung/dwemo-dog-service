'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn, slideInFromBottom } from './utils/motion';
import { LockKeyhole, UnlockKeyhole, Search, Instagram } from 'lucide-react';

import doggy from './puppy1.png';
import logoHome from '../public/home-logo.svg';
import logoMobile from '../public/logo-mobile.svg';
import Menu from './components/menu';
import LoginModal from './components/auth/login';
import RegisterModal from './components/auth/register';
import { useUser } from './context/user';

export default function Home() {
  const contextUser = useUser();

  return (
    <>
      <main className="relative md:h-screen flex flex-col items-center justify-center pt-16 md:pt-0 text-center gap-6">
        <Image
          src={logoHome}
          alt="logo home"
          className="hidden lg:block absolute -z-10 mx-auto w-[70vw]"
          priority
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
          {!contextUser?.user ? (
            <div className="grid grid-cols-1 place-items-center gap-3 text-sm">
              <LoginModal />
              <div className="border border-black rounded-full p-3 w-10 h-10 flex items-center justify-center">
                <LockKeyhole />
              </div>
              <RegisterModal />
            </div>
          ) : (
            <div className="grid grid-cols-1 place-items-center gap-3 text-sm">
              <div className="border border-black rounded-full p-3 w-10 h-10 flex items-center justify-center">
                <UnlockKeyhole />
              </div>
              <div className="hover:cursor-pointer">Log out</div>
            </div>
          )}
          <motion.div
            variants={slideInFromBottom(0.1)}
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
              priority
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
