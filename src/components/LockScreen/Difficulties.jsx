import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'
import './Difficulties.css'
export default function Difficulties () {
  const { handleDifficultyInformation } = useGameInformationManagement()

  const handleDifficulty = e => {
    handleDifficultyInformation(e.target.textContent)
  }

  return (
    <>
      <button className='btn-difficulty' onClick={handleDifficulty}>
        Insane
      </button>
      <button className='btn-difficulty' onClick={handleDifficulty}>
        Hard
      </button>
      <button className='btn-difficulty' onClick={handleDifficulty}>
        Normal
      </button>
      <button className='btn-difficulty' onClick={handleDifficulty}>
        Easy
      </button>
    </>
  )
}
