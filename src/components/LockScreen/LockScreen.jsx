import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'
import Difficulties from './Difficulties'
import './LockScreen.css'
export default function LockScreen () {
  const { difficulty } = useGameInformationManagement()

  return (
    !difficulty && (
      <div className='lock-screen'>
        <Difficulties />
      </div>
    )
  )
}
