import Image from 'next/image'
import ParticleCanvas from '@/components/ParticleCanvas'
import ParticleMask from '../images/particleMask.svg'

export default function Home() {
  return (
    <main className='relative w-full flex justify-center items-center'>
        <Image className='h-screen w-screen' src={ParticleMask} alt="canvas mask" />
        <ParticleCanvas className="absolute inset-0 pointer-events-none" quantity={100} />
        <p className='absolute font-bold text-6xl'>
          Hello, this is Tse.
        </p>
    </main>
  )
}
