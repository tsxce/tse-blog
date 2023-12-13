import React from 'react'

const r = 600

interface LightCircleProps {
  x: number
  y: number
}

export default function LightCircle({ x, y }: LightCircleProps) {
  return (
    <div
      className="rounded-full z-10"
      data-testid="light"
      style={{
        position: 'absolute',
        width: r * 2 + 'px',
        height: r * 2 + 'px',
        backgroundImage:
          'radial-gradient(circle at center, #8273F7 0, #131315, #131315 100%)',
        opacity: '0.15',
        top: `${y - r}px`,
        left: `${x - r}px`,
      }}
    />
  )
}
