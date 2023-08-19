import { useEffect, useState } from 'react'
import getTotalScrollHeight from '@/utils/getTotalScrollHeight'

export default function useWindownPosition() {
  const [scrollPosition, setPosition] = useState(0)
  const [totalHeight, setTotalHeight] = useState(0)
  const viewHeight = window.innerHeight
  useEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    //Set total scroll height value, musk get it after dom render complete so put it in the useEffect.
    const scrollTotalHeight = getTotalScrollHeight()
    setTotalHeight(scrollTotalHeight)
    return () => {
      window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return { scrollPosition, totalHeight, viewHeight }
}
