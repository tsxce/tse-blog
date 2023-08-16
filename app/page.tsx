'use client'
import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import ParticleCanvas from '@/components/ParticleCanvas'
import ParticleMask from '../images/particleMask.svg'
import { noto_sans } from "./font";

export default function Home() {
  const canvasRef = useRef(null);
  const introRef = useRef(null);
  const isScrollEnd = useRef(true);
  console.log("!!!", isScrollEnd.current)
  const handleClick = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
    isScrollEnd.current = false;
    console.log(isScrollEnd.current)
  };

  useEffect(()=> {
    var scrollTimeout;
    const scrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
          isScrollEnd.current = true;
          console.log('Scroll ended', isScrollEnd.current);
      }, 100);
    }
    window.addEventListener('scroll', scrollEnd);
    return () => {
      window.removeEventListener('scroll', scrollEnd);
    }
  }, [])

  useEffect(() => {
    var lastScrollTop = 0;
    const detectDirect = () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && isScrollEnd.current) {
         // downscroll code
         console.log("down!")
         handleClick();
      } else if (st < lastScrollTop) {
         // upscroll code
         console.log("up!")
        //  if(isScrollEnd.current) {
        //     handleClick();
        //   }
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }
    window.addEventListener('scroll', detectDirect, false)
    return () => {
      window.removeEventListener('scroll', detectDirect)
    }
  }, [])

  return (
    <main className={noto_sans.className}>
      <div ref={canvasRef} id='canvas-section' className='relative w-full flex justify-center items-center'>
        <Image className='h-screen w-screen' src={ParticleMask} alt="canvas mask" />
        <ParticleCanvas className="absolute inset-0 pointer-events-none" quantity={100} />

          <p className='absolute font-bold text-6xl animate-pulse'>
            Hello, this is Tse.
          </p>

        <p className='absolute text-xl animate-pulse bottom-0 left-1/2 transform -translate-x-1/2' onClick={handleClick}>Scroll Down</p>
      </div>
      <div className="w-[1088px] mx-auto lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <p className="font-bold text-5xl">Nick Tse</p>
          <p className="text-lg mt-3">Frontend engineer</p>
          <p className="text-textGrey mt-4 max-w-xs">I build accessible, inclusive products and digital experiences for the web.</p>
        </header>
        <div ref={introRef} id='intro' className="pt-24 lg:w-1/2 lg:py-24">
          <div className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          </div>
          <div className="mb-4">
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </div>
          <div className="">
            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for
          </div>

          <div className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          </div>
          <div className="mb-4">
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </div>
          <div className="">
            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for
          </div>

          <div className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          </div>
          <div className="mb-4">
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </div>
          <div className="">
            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for
          </div>

          <div className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          </div>
          <div className="mb-4">
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </div>
          <div className="">
            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for
          </div>
        </div>
      </div>
    </main>
  )
}
