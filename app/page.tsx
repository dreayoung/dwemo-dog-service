'use client';

import Image from 'next/image';

import dLetter from '../public/letters/Shiny/d.svg';
import oLetter from '../public/letters/Shiny/o.svg';
import gLetter from '../public/letters/Shiny/g.svg';
import apostro from '../public/letters/Shiny/Apostrophe.svg';
import sLetter from '../public/letters/Shiny/s.svg';

import rect_shape from '../public/shapes/rectangle_2.svg';
import mobile_rect from '../public/shapes/mobile_rect1.svg';
import pow from '../public/shapes/pow.svg';
import sqwig from '../public/shapes/sqwig.svg';
import blob_star from '../public/shapes/blob_star.svg';
import bowl from '../public/bowl.png';

import mobile1 from '../public/mobile1.svg';
import sqwig_mobile from '../public/shapes/sqwig_mobile.svg';

import { motion } from 'framer-motion';
import { fadeIn, slideInFromBottom, slideInFromLeft } from './utils/motion';
import CommunitySection from './components/community';
import { Instagram, MoveDown, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-[70vh] md:min-h-screen flex-col items-center pt-6 md:pt-0 md:justify-center text-center">
        <div className="absolute z-20 top-[1.85rem] md:top-6 md:right-[20%] text-xl md:text-sm bg-off_white text-orangey uppercase tracking-wide border-[3px] border-t-0 md:border-t-4 border-orangey w-fit py-1 px-8 rounded-3xl">
          explore
        </div>
        <Image
          src={rect_shape}
          alt="rect shape"
          className="hidden md:block absolute md:w-[50rem] lg:w-[60rem] m-auto -z-10"
        />

        <Image
          src={mobile_rect}
          alt="rmobile ect shape"
          className="absolute md:hidden w-[90%] mx-auto -z-10"
        />

        <div className="flex flex-col items-center justify-center gap-10">
          <Image
            src={mobile1}
            alt="mobile dogs word"
            className="md:hidden w-72 pt-32"
          />
          <div className="text-orangey md:hidden">
            <MoveDown size={45} />
          </div>
          <div className="md:hidden flex flex-col items-center justify-center pt-20 pl-4">
            {/* <span className="absolute text-dark_orangey tracking-widest -top-8">feed me</span> */}
            <Image src={blob_star} alt="blob star" className="w-24 md:w-28" />
            <Image src={bowl} alt="dog bowl" className="absolute w-28 z-20" />
          </div>
        </div>

        <Image
          src={sqwig_mobile}
          alt="swig mobile"
          className="absolute md:hidden w-[6rem] left-10 top-[21rem]"
        />

        <div className="hidden relative md:flex items-center justify-center -space-x-10 mb-32">
          {/* <div className="absolute -top-10 left-10 flex flex-col items-center justify-center">
            <div className="w-52 h-10 bg-orangey rounded-full" /> */}
          <div className="absolute -top-8 text-orangey text-2xl uppercase">
            meet the
          </div>
          {/* </div> */}
          <Image
            src={dLetter}
            alt="d letter"
            className="w-28 md:w-52 lg:w-64"
          />
          <Image
            src={oLetter}
            alt="o letter"
            className="w-28 md:w-52 lg:w-64"
          />
          <Image
            src={gLetter}
            alt="g letter"
            className="w-28 md:w-52 lg:w-64"
          />
          <Image
            src={apostro}
            alt="apostrophe"
            className="w-6 absolute -right-4"
          />
          <Image
            src={sLetter}
            alt="s letter"
            className="w-10 md:w-28 absolute -right-24 bottom-0"
          />
          <Image
            src={sqwig}
            alt="swig"
            className="absolute md:-left-10 lg:-left-32 md:-bottom-16 lg:-bottom-24 w-28 md:w-80 lg:w-[28rem]"
          />
          <div className="flex items-center absolute -right-16 -bottom-14 space-x-2 text-orangey">
            <div className="bg-dark_orangey/20 rounded-full p-3 hover:border hover:border-dark_orangey">
              <Instagram size={20} />
            </div>
            <div className="bg-dark_orangey/20 rounded-full p-3 hover:border hover:border-dark_orangey">
              <Twitter size={20} />
            </div>
            <span className="text-xs">stay up to date</span>
          </div>
        </div>
        <div className="hidden absolute m-auto ml-4 -bottom-2 md:flex flex-col items-center justify-center">
          <span className="absolute text-dark_orangey tracking-widest -top-8">
            feed me
          </span>
          <Image src={blob_star} alt="blob star" className="md:w-28" />
          <Image src={bowl} alt="dog bowl" className="absolute w-28 z-20" />
        </div>
      </main>
      <CommunitySection />
    </>
  );
}
