import Image from 'next/image'
import techImages from '@/utils/techImageImport'

export default function TechStack() {
  console.log(techImages)
  return (
    <div className="flex w-[200px]">
      {Object.keys(techImages).map((image, i) => {
        return (
          // <div className='w-2 h-2' key={i + 'image'}>
          <Image
            key={i}
            className="ml-3"
            width={14}
            height={12}
            src={techImages[image]['default']['src']}
            alt=""
          />
          // </div>
        )
      })}
    </div>
  )
}
