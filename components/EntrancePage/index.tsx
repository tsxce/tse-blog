'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ParticleMask from '../../images/particleMask.svg'
import ParticleCanvas from '../ParticleCanvas'
import GptEffect from '../GptEffect'

const words = [
  'Hello, this is Tse.',
  'Welcome to my website.',
  // 'Scroll down to see more information.',
]

export default function EntrancePage() {
  const [wordIndex, setWordIndex] = useState(0)
  const [completedTyping, setCompletedTyping] = useState(false)

  const handleCompletedTyping = (status: boolean) => {
    setCompletedTyping(status)
  }

  useEffect(() => {
    if (completedTyping) {
      if (wordIndex + 1 == words.length) {
        setWordIndex(0)
      } else {
        setWordIndex(wordIndex + 1)
      }
    }
  }, [completedTyping, wordIndex])

  return (
    <div
      id="canvas-section"
      className="relative flex justify-center items-center snap-start"
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
      {/* <p className="absolute font-bold text-6xl animate-flicker">Hello, this is Tse.</p> */}
      <GptEffect
        clx={'absolute font-bold text-6xl'}
        typingStr={words[wordIndex].split('')}
        completedTyping={completedTyping}
        handleCompletedTyping={handleCompletedTyping}
      />
      <p className="absolute text-xl animate-pulse bottom-[20px] left-1/2 transform -translate-x-1/2 cursor-pointer">
        Scroll Down
      </p>
    </div>
  )
}
