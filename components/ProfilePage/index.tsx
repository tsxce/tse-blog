'use client'
// import Image from 'next/image'
import { useState, useEffect } from 'react'
import LightCircle from '../LightCircle'
// import SelfPage from '@/images/myself.png'
// import SelfPageBgImg from '@/images/bg.png'
import WaveHand from '../WaveHand'
import TechStack from '../TechStack'
// import BubbleChat from '../BubbleChat'
import SocialMediaBar from '../SocialMediaBar'

export default function ProfilePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
  }

  return (
    <div
      data-testid="profile-page"
      className="relative w-screen h-screen sm:h-auto snap-start sm:px-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMouseOver && <LightCircle x={mousePos.x} y={mousePos.y} />}
      {/* <div className="absolute z-0 left-[20%] top-[5%] overflow-hidden bg-bgDark bg-cover bg-[50%] bg-no-repeat">
        <Image
          className="w-[560px]"
          src={SelfPageBgImg}
          alt="backgroud photo"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-bgDark bg-fixed opacity-60" />
      </div> */}
      <div className="flex sm:flex-col sm:justify-center absolute z-30 bottom-[50px] sm:bottom-8 right-[50px] sm:right-3">
        <SocialMediaBar />
      </div>
      <div className="relative z-3 w-[1088px] sm:w-auto h-full mx-auto flex justify-between sm:block gap-4">
        <header className="flex flex-col self-center sm:justify-center sticky sm:relative top-0 max-h-screen w-1/2 sm:w-auto py-24 sm:py-12">
          <div className="text-left sm:text-center">
            <p className="font-bold text-5xl">
              <span className="sm:mb-10">
                Hi
                <WaveHand />,
              </span>
              <br className="hidden sm:inline-block" />I am Chan{' '}
              <span className="text-purple">Tse</span>
            </p>
            <p className="text-xl mt-3">Frontend engineer</p>
            <p className="text-textGrey mt-4 sm:mt-2 max-w-xs sm:max-w-none">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>
          <TechStack />
        </header>
        <div
          id="intro"
          className="flex flex-col self-center text-base sm:text-sm font-mono sm:text-center pt-24 sm:pt-0 w-1/2 sm:w-auto py-24"
        >
          <p className="mb-4">
            I have over 3+ years extensive experience in the web development
            industry. My professional connections within the web development
            industry keep me updated with the latest trends and technology
            advancements.
          </p>
          <p className="mb-4">
            Problem solver, well-organised person, loyal employee with high
            attention to detail. Enthusiast of outdoor adventures, travel, and
            coding in general.
          </p>
          <p className="">
            Passionate about the broad frontend domain and eager to participate
            in challenging ventures.
          </p>
        </div>
      </div>
    </div>
  )
}
