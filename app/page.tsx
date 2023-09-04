import { noto_sans } from './font'
// import SideStepper from '@/components/SideStepper'
import ProfilePage from '@/components/ProfilePage'
import EntrancePage from '@/components/EntrancePage'

export default function Home() {
  return (
    <main className={noto_sans.className + ' relative h-screen'}>
      {/* <SideStepper /> */}
      <EntrancePage />
      <ProfilePage />
      {/* <div className="h-screen bg-purple"></div> */}
    </main>
  )
}
