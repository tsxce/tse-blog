import React, { useState, useEffect } from 'react'
interface GptEffectProps {
  clx: string
  typingStr: string[]
  completedTyping: boolean
  handleCompletedTyping: (boolean) => void
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
      className="inline-block w-10 animate-flicker"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="white" />
    </svg>
  )
}

export default function GptEffect({
  clx,
  typingStr,
  completedTyping,
  handleCompletedTyping,
}: GptEffectProps) {
  const [displayResponse, setDisplayResponse] = useState(false)

  useEffect(() => {
    handleCompletedTyping(false)
    let i = 0
    const intervalId = setInterval(() => {
      setDisplayResponse(typingStr.slice(0, i))
      i++
      if (i > typingStr.length) {
        clearInterval(intervalId)
        handleCompletedTyping(true)
      }
    }, 100)
    return () => clearInterval(intervalId)
  }, [typingStr, handleCompletedTyping])

  return (
    <span className={clx}>
      {displayResponse}
      {!completedTyping && <CursorSVG />}
    </span>
  )
}
