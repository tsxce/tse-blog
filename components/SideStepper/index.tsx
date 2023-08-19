'use client'
import useWindownPosition from '@/hook/useWindowPosition'

export default function SideStepper() {
  const { scrollPosition, totalHeight } = useWindownPosition()
  console.log(totalHeight)
  return (
    <div className="fixed right-0 top-1/2 z-10 rotate-90 transform -translate-y-1/2 w-[100px] h-[20px] bg-purple">
      {/* {scrollPosition}
      {totalHeight} */}
      {(scrollPosition + 1000) / totalHeight}
    </div>
  )
}
