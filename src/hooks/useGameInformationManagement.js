import { useContext } from 'react'
import { GameInformationContext } from '../Contexts/informationContext'

const DEFAULT_DIFFICULTIES = {
  EASY: ['Easy', 30],
  NORMAL: ['Normal', 25],
  HARD: ['Hard', 20],
  INSANE: ['Insane', 15]
}

export function useGameInformationManagement () {
  const gameInformation = useContext(GameInformationContext)
  if (gameInformation === undefined)
    throw new Error(
      'useGameInformationManagement must be used within a GameInformationProvider'
    )

  const {
    attempts,
    difficulty,
    blunders,
    hits,
    setHits,
    setBlunders,
    setAttempts,
    setDifficulty
  } = gameInformation

  const handleDifficultyInformation = (difficulty = '') => {
    if (!difficulty) return
    const defaultDifficulty = difficulty.toUpperCase()
    const difficultyName = DEFAULT_DIFFICULTIES[defaultDifficulty][0]
    const difficultyAttempts = DEFAULT_DIFFICULTIES[defaultDifficulty][1]

    setAttempts(difficultyAttempts)
    setDifficulty(difficultyName)
  }

  return { hits, blunders, difficulty, attempts, handleDifficultyInformation }
}
