'use client'
import { useState, useEffect } from 'react'
import LightCircle from '../LightCircle'
// import { useInView } from 'react-intersection-observer';

export default function ProfilePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  //   const { ref, inView, entry } = useInView({
  //     threshold: 0.2,
  //   });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-screen h-screen snap-start">
      {<LightCircle x={mousePos.x} y={mousePos.y} />}
      <div className="relative z-3 w-[1388px] h-full mx-auto lg:flex lg:justify-between lg:gap-4">
        <header className="flex flex-col self-center lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <div>
            <p className="font-bold text-7xl">
              Hi, I am Chan <span className="text-purple">Tse</span>
            </p>
            <p className="font-bold text-7xl">Web Developer</p>
            <p className="text-lg mt-3">Frontend engineer / Component base</p>
            <p className="text-textGrey mt-4 max-w-xs">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>
        </header>
        <div
          id="intro"
          className="flex flex-col self-center text-2xl font-mono pt-24 lg:w-1/2 lg:py-24"
        >
          <p className="mb-4">
            Professionally connected with the web development industry.
          </p>
          <p className="mb-4">
            Problem solver, well-organised person, loyal employee with high
            attention to detail. Fan of Boxing, outdoor activities, video games,
            and coding of courses.
          </p>
          <p className="">
            Interested in the entire frontend spectrum and working on ambitious
            projects with interesting people.
          </p>
        </div>
      </div>
    </div>
  )
}
