'use client'
import useWindownPosition from '@/hook/useWindowPosition'
import { useEffect } from 'react'

export default function SideStepper() {
  const { scrollPosition, totalHeight, viewHeight } = useWindownPosition()
  const result: any[] = []
  for (let i = 0; i < totalHeight / viewHeight; i++) {
    result.push(<div id={`stepper-${i + 1}`}>*</div>)
  }
  useEffect(() => {
    // const steperId = 'stepper-' + (Math.ceil(scrollPosition / viewHeight) + 1)
    // const stepperMaybeNullElement = window.document.getElementsByClassName('stepper-1')
    const stepperMaybeNullElement =
      document.querySelector<HTMLElement>(`#stepper-1`)!
    // stepperMaybeNullElement.style.color = 'red'
    stepperMaybeNullElement.classList.add('text-bg-purple')
    console.log(stepperMaybeNullElement)
    // if ( stepperMaybeNullElement === null ) {
    //   alert('oops');
    // } else {
    //   stepperMaybeNullElement.style.color ='red'
    // }
    console.log(Math.ceil(scrollPosition / viewHeight) + 1)
  }, [scrollPosition, viewHeight])
  return (
    <div className="fixed right-0 top-1/2 z-10 rotate-90 transform -translate-y-1/2 w-[100px] h-[20px]">
      {/* {(scrollPosition + 1000) / totalHeight} */}
      {result}
    </div>
  )
}
