import Image from 'next/image';
import comm_mobile from '../../public/letters/comm_mobile.svg';
import comm from '../../public/letters/comm.svg';

import oreo from '../../public/oreo-remove.png';
import pluto from '../../public/pluto.png';
import sal from '../../public/sal.png';
import eclipse from '../../public/shapes/eclipse.svg';

function CommunitySection() {
  const dogs = [
    { name: 'oreo', img: oreo },
    { name: 'pluto', img: pluto },
    { name: 'sal', img: sal },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center pt-40">
      <div className="text-2xl md:text-center text-dark_orangey">Join our</div>
      <div className="flex items-center justify-center">
        <Image
          src={comm_mobile}
          alt="community mobile"
          width={350}
          height={350}
          className="w-[95%] block md:hidden"
        />
        <Image
          src={comm}
          alt="community desktop"
          width={350}
          height={350}
          className="hidden md:block w-[85%]"
        />
      </div>

      <div className="md:hidden absolute top-96 -z-10 w-full h-full bg-dark_orangey/20 rounded-t-full" />
      <div className="relative pt-20 md:pt-28 flex flex-col items-center justify-center">
        <div className="text-orangey text-xl">Meet the crew</div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 md:mt-20 gap-32 lg:gap-16">
          {dogs.map((dog, g) => {
            return (
              <div
                key={g}
                className="relative flex flex-col items-center justify-center w-52 h-52 md:w-72 md:h-72 -space-y-10 bg-[url('/shapes/ellipse_frame.png')] bg-contain bg-repeat-round"
              >
                <Image
                  src={dog.img}
                  alt="oreo headshot"
                  width={350}
                  height={350}
                  className="w-40 md:w-52"
                />
                <div className="flex items-center justify-center -space-x-4 md:-space-x-6">
                  {dog.name.split('').map((letter, x) => {
                    return (
                      <Image
                        key={x}
                        src={`/letters/Shiny/${letter}.svg`}
                        alt="letters"
                        width={250}
                        height={250}
                        className="w-14 md:w-20"
                      />
                    );
                  })}
                </div>
                <div className="bg-off_white text-orangey border-2 border-orangey rounded-3xl px-10 py-2 absolute -bottom-16 z-30">
                  view profile
                </div>
              </div>
            );
          })}
        </div>

        <Image
          src={eclipse}
          alt="eclpise"
          width={350}
          height={350}
          className="hidden md:block w-[95%] absolute -z-10"
        />
      </div>
    </div>
  );
}

export default CommunitySection;
