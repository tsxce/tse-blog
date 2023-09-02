import * as LogoIcon from './logoIcon'

export default function TechStack() {
  return (
    <div>
      <div className="flex w-[200px] mt-8">
        {Object.keys(LogoIcon).map((item) => {
          console.log(item)
          return LogoIcon[item]('w-8 ml-2 first:ml-0')
        })}
      </div>
    </div>
  )
}
