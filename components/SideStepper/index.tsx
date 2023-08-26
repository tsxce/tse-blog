'use client'
import useWindownPosition from '@/hook/useWindowPosition'
import { useEffect, useRef, useCallback, useState } from 'react'

export default function SideStepper() {
  const { scrollPosition, totalHeight } = useWindownPosition()
  const [screenNum, setScreenNum] = useState(0)
  const list = [...Array(screenNum).keys()]
  const refArray = useRef([])

  const addIndexColor = useCallback(
    (p) => {
      refArray.current.forEach((refItem, index) => {
        if (index === p) {
          refItem?.classList.add('fill-purple')
        } else {
          refItem?.classList.remove('fill-purple')
        }
      })
    },
    [refArray],
  )

  useEffect(() => {
    const viewHeight = window.innerHeight
    setScreenNum(totalHeight / viewHeight)
    const colorIndex = Math.ceil(scrollPosition / viewHeight)
    addIndexColor(colorIndex)
  }, [scrollPosition, addIndexColor, totalHeight])

  return (
    <>
      {scrollPosition >= 1000 && (
        <div className="fixed flex right-0 top-1/2 z-10 rotate-90 transform -translate-y-1/2 w-[100px] h-[20px]">
          {list.map((x) => {
            return (
              <svg
                key={x}
                id={`stepper-${x}`}
                className="ml-2"
                ref={(el) => {
                  refArray.current[x] = el
                }}
                width="20"
                height="6"
              >
                <rect width="300" height="100" />
              </svg>
            )
          })}
        </div>
      )}
    </>
  )
}
