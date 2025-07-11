import { GiPunch } from 'react-icons/gi';
import BlurText from './BlurText';
import Particles from './Particles';
import React from 'react';

const Trial = () => {
  return (
    <div className="overflow-hidden w-full h-screen mx-auto px-4 sm:px-0   " style={{ width: '100%', height: 'h-screen', position: 'relative' }}>
      <div className=" absolute inset-0 bg-black rounded-xl" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <div className="inline-block text-center">
          <BlurText
            text="Strike Stats"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-8xl font-mono font-bold mb-4"

          />
          <hr className="border-t-4 border-white w-full mb-8" />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-start">
            <BlurText
              text="MMA Analytics"
              delay={600}
              animateBy="words"
              direction="top"
              className="text-xl md:text-4xl font-mono mb-2"
            />
            <BlurText
              text="Done Right."
              delay={900}
              animateBy="words"
              direction="top"
              className="text-xl md:text-4xl font-mono"
            />
          </div>

          <GiPunch
            className="text-white w-25 h-25 sm:w-50 sm:h-50"
          />
        </div>
      </div>
      <Particles
        particleColors={['#E01010', '#E01010']}
        particleCount={275}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      {/* <div className="absolute inset-0 z-10 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">Overlay Content</h1>
            </div> */}

    </div>
    // <section className="relative bg-black text-white py-12 px-4 flex flex-col items-center">
    //     <div className="absolute inset-0 bg-black/60" />
    //     <div className="relative z-10 flex flex-col items-center">
    //         <div className="inline-block text-center">
    //             <BlurText
    //                 text="Strike Stat"
    //                 delay={300}
    //                 animateBy="words"
    //                 direction="top"
    //                 className="text-6xl font-mono mb-4"
    //             />
    //             <hr className="border-t-4 border-white w-full mb-8" />
    //         </div>

    //         <div className="flex items-center space-x-6">
    //             <div className="flex flex-col items-start">
    //                 <BlurText
    //                     text="MMA Analytics"
    //                     delay={600}
    //                     animateBy="words"
    //                     direction="top"
    //                     className="text-2xl font-mono mb-2"
    //                 />
    //                 <BlurText
    //                     text="Done right"
    //                     delay={900}
    //                     animateBy="words"
    //                     direction="top"
    //                     className="text-2xl font-mono"
    //                 />
    //             </div>

    //             <GiPunch size={100} className="text-white" />
    //         </div>
    //     </div>
    // </section>
  )
}

export default Trial