import { useState, useEffect } from 'react'
import LightCircle from '../LightCircle'
export default function ProfilePage({ profileRef }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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
    <div ref={profileRef} className="relative w-screen h-screen snap-start">
      <LightCircle x={mousePos.x} y={mousePos.y} />
      <div className="w-[1088px] mx-auto lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <p className="font-bold text-5xl">Nick Tse</p>
          <p className="text-lg mt-3">Frontend engineer</p>
          <p className="text-textGrey mt-4 max-w-xs">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
        </header>
        <div id="intro" className="pt-24 lg:w-1/2 lg:py-24">
          <div className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </div>
          <div className="mb-4">
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I've also released
            an online video course that covers everything you need to know to
            build a web app with the Spotify API.
          </div>
          <div className="">
            When I’m not at the computer, I’m usually rock climbing, hanging out
            with my wife and two cats, or running around Hyrule searching for
          </div>
        </div>
      </div>
    </div>
  )
}
