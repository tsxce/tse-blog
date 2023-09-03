import * as LogoIcon from './logoIcon'

export default function TechStack() {
  return (
    <div className="relative mt-8">
      <div className="flex">
        {Object.keys(LogoIcon)
          .slice(0, 9)
          .map((item) => {
            return LogoIcon[item](
              'relative z-20 w-[30px] ml-3 cursor-pointer hover:scale-125 first:ml-0',
            )
          })}
      </div>
      <div className="flex mt-3">
        {Object.keys(LogoIcon)
          .slice(9)
          .map((item) => {
            return LogoIcon[item](
              'relative z-20 w-[30px] ml-3 cursor-pointer hover:scale-125 first:ml-0',
            )
          })}
      </div>
    </div>
  )
}
