import Image from 'next/image'
import techImages from '@/utils/techImageImport'

export default function TechStack() {
  return (
    <div className='flex w-[200px]'>
        {
            Object.keys(techImages).map((image, i) => {
                console.log(techImages[image])
                return (
                    // <div className='w-2 h-2' key={i + 'image'}>
                        <Image key={i} className='ml-3' width={300} height={300} src={techImages[image]['default']['src']} alt="" />
                    // </div>
                )
            })
        }
    </div>
  )
}
