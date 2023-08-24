import React from 'react'

const r = 600

export default function LightCircle({ x, y }) {
  return (
    <div
      className="rounded-full z-10"
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
