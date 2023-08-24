import './style.css'
import { arcade_sans } from '@/app/font'

export default function BubbleChat({ clx }) {
  return (
    <div className={clx}>
      <span id="bubble">
        <h1 id="quote" className={arcade_sans.className}>
          Hello
        </h1>
      </span>
    </div>
  )
}
