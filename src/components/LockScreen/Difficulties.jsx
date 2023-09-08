import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'
import { DEFAULT_DIFFICULTIES } from '../../utils/difficulties'
import DifficultyButton from './DifficultyButton'
export default function Difficulties () {
  const { handleDifficultyInformation } = useGameInformationManagement()

  const handleDifficulty = e => {
    handleDifficultyInformation(e.target.textContent)
  }

  return (
    <>
      {Object.values(DEFAULT_DIFFICULTIES).map(([difficulty, _]) => (
        <DifficultyButton
          key={difficulty}
          difficulty={difficulty}
          handleDifficulty={handleDifficulty}
        />
      ))}
    </>
  )
}
