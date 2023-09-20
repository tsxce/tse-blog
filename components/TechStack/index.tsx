import * as LogoIcon from './logoIcon'

export default function TechStack() {
  return (
    <>
      <div className="relative mt-8 sm:hidden">
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
      {/* For mobile */}
      <div className="relative mt-4 hidden sm:block">
        <div className="flex justify-center mt-6">
          {Object.keys(LogoIcon)
            .slice(0, 4)
            .map((item) => {
              return LogoIcon[item](
                'relative z-20 w-[40px] ml-6 cursor-pointer hover:scale-125 first:ml-0',
              )
            })}
        </div>
        <div className="flex justify-center mt-6">
          {Object.keys(LogoIcon)
            .slice(4, 8)
            .map((item) => {
              return LogoIcon[item](
                'relative z-20 w-[40px] ml-6 cursor-pointer hover:scale-125 first:ml-0',
              )
            })}
        </div>
        <div className="flex justify-center mt-6">
          {Object.keys(LogoIcon)
            .slice(8, 12)
            .map((item) => {
              return LogoIcon[item](
                'relative z-20 w-[40px] ml-6 cursor-pointer hover:scale-125 first:ml-0',
              )
            })}
        </div>
        <div className="flex justify-center mt-6">
          {Object.keys(LogoIcon)
            .slice(12, 16)
            .map((item) => {
              return LogoIcon[item](
                'relative z-20 w-[40px] ml-6 cursor-pointer hover:scale-125 first:ml-0',
              )
            })}
        </div>
      </div>
    </>
  )
}
