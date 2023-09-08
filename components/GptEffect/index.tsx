'use client'
import React, { useState, useEffect } from 'react'

interface GptEffectProps {
  clx: string
  typingStr: string[]
}

function CursorSVG() {
  return (
    // <svg
    //   viewBox="8 4 8 16"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="inline-block w-8 animate-flicker"
    // >
    //   <rect x="10" y="6" width="4" height="12" fill="#fff" />
    // </svg>
    <svg
      className="inline-block w-10 animate-flicker sm:w-5"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="white" />
    </svg>
  )
}

export default function GptEffect({ clx, typingStr }: GptEffectProps) {
  const [displayResponse, setDisplayResponse] = useState([''])
  const [completedTyping, setCompletedTyping] = useState(false)

  useEffect(() => {
    setCompletedTyping(false)
    let i = 0
    const intervalId = setInterval(() => {
      setDisplayResponse(typingStr.slice(0, i))
      i++
      if (i > typingStr.length) {
        clearInterval(intervalId)
        setCompletedTyping(true)
      }
    }, 40)
    return () => clearInterval(intervalId)
  }, [typingStr])

  return (
    <span className={clx}>
      {displayResponse}
      {/* {!completedTyping && <CursorSVG />} */}
      <CursorSVG />
    </span>
  )
}
