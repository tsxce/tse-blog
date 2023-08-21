'use client'
import useWindownPosition from '@/hook/useWindowPosition'
import { useEffect, useRef, useCallback, useMemo } from 'react'

export default function SideStepper() {
  const { scrollPosition, totalHeight, viewHeight } = useWindownPosition()
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const refArray = useMemo(() => [ref1, ref2, ref3], [])

  const addIndexColor = useCallback(
    (p) => {
      refArray.forEach((refItem, index) => {
        if (index === p) {
          refItem.current?.classList.add('text-purple')
        } else {
          refItem.current?.classList.remove('text-purple')
        }
      })
    },
    [refArray],
  )

  useEffect(() => {
    const colorIndex = Math.ceil(scrollPosition / viewHeight)
    addIndexColor(colorIndex)
  }, [scrollPosition, viewHeight, addIndexColor])
  return (
    <div className="fixed right-0 top-1/2 z-10 rotate-90 transform -translate-y-1/2 w-[100px] h-[20px]">
      <div id={'stepper-1'} ref={ref1}>
        *
      </div>
      <div id={'stepper-2'} ref={ref2}>
        *
      </div>
      <div id={'stepper-3'} ref={ref3}>
        *
      </div>
    </div>
  )
}
