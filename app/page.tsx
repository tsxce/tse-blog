import Image from 'next/image'
import ParticleCanvas from '@/components/ParticleCanvas'
import ParticleMask from '../images/particleMask.svg'
import { noto_sans } from './font'
import SideStepper from '@/components/SideStepper'
import ProfilePage from '@/components/ProfilePage'

export default function Home() {
  return (
    <main className={noto_sans.className + ' relative h-screen'}>
      <SideStepper />
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
        <p className="absolute font-bold text-6xl animate-pulse">
          Hello, this is Tse.
        </p>
        <p className="absolute text-xl animate-pulse bottom-[20px] left-1/2 transform -translate-x-1/2 cursor-pointer">
          Scroll Down
        </p>
      </div>
      <ProfilePage />
      <div className="h-screen bg-purple"></div>
    </main>
  )
}
