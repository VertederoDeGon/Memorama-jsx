import useDifficulty from '../../hooks/useDifficulty'
import './DifficultyButton.css'

export default function DifficultyButton ({ difficulty, handleDifficulty }) {
  const { color, handleMouseEnter, handleMouseLeave } = useDifficulty({
    difficulty
  })
  const handleClick = e => {
    e.preventDefault()
    handleDifficulty(e)
  }

  return (
    <button
      style={{
        backgroundColor: color
      }}
      className='btn-difficulty'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {difficulty}
    </button>
  )
}
