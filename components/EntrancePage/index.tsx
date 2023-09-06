import Image from 'next/image'
import ParticleMask from '../../images/particleMask.svg'
import ParticleCanvas from '../ParticleCanvas'
import GptEffect from '../GptEffect'

export default function EntrancePage() {
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
        typingStr={'Hello, this is Tse.'.split('')}
      />
      <p className="absolute text-xl animate-pulse bottom-[20px] left-1/2 transform -translate-x-1/2 cursor-pointer">
        Scroll Down
      </p>
    </div>
  )
}
