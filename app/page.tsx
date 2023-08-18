'use client'
import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import ParticleCanvas from '@/components/ParticleCanvas'
import ParticleMask from '../images/particleMask.svg'
import { noto_sans } from './font'
import { useInView } from 'react-intersection-observer'

import ProfilePage from '@/components/ProfilePage'
import ProjectPage from '@/components/ProjectPage'

export default function Home() {
  const canvasRef = useRef(null)
  // const profileRef = useRef(null)

  // const handleScrollDownBtn = () => {
  //   profileRef.current?.scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <main
      className={
        noto_sans.className +
        ' snap-y snap-mandatory h-screen w-screen overflow-x-hidden'
      }
    >
      <div
        ref={canvasRef}
        id="canvas-section"
        className="relative w-full flex justify-center items-center snap-start"
      >
        <Image
          className="h-screen w-screen"
          src={ParticleMask}
          alt="canvas mask"
        />
        <ParticleCanvas
          className="absolute inset-0 pointer-events-none"
          quantity={100}
        />
        <p className="absolute font-bold text-6xl animate-pulse">
          Hello, this is Tse.
        </p>
        <p
          className="absolute text-xl animate-pulse bottom-[20px] left-1/2 transform -translate-x-1/2 cursor-pointer"
          // onClick={handleScrollDownBtn}
        >
          Scroll Down
        </p>
      </div>
      <ProfilePage />
      <ProjectPage />
    </main>
  )
}
