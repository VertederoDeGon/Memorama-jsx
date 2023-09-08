import { useCallback, useContext, useEffect } from 'react'
import { GameInformationContext } from '../Contexts/informationContext'
import { DEFAULT_DIFFICULTIES } from '../utils/difficulties'

export function useGameInformationManagement () {
  const gameInformation = useContext(GameInformationContext)
  if (gameInformation === undefined)
    throw new Error(
      'useGameInformationManagement must be used within a GameInformationProvider'
    )

  const {
    win,
    hits,
    blunders,
    attempts,
    resetGame,
    difficulty,
    setWin,
    setHits,
    setBlunders,
    setAttempts,
    setResetGame,
    setDifficulty
  } = gameInformation

  const handleDifficultyInformation = useCallback(
    (difficulty = '') => {
      if (!difficulty) return
      const defaultDifficulty = difficulty.toUpperCase()
      const difficultyName = DEFAULT_DIFFICULTIES[defaultDifficulty][0]
      const difficultyAttempts = DEFAULT_DIFFICULTIES[defaultDifficulty][1]

      setAttempts(difficultyAttempts)
      setDifficulty(difficultyName)
    },
    [difficulty]
  )

  const updateBlundersAndHits = useCallback(
    matches => {
      matches ? setHits(hits + 1) : setBlunders(blunders + 1)
    },
    [hits, blunders]
  )

  useEffect(() => {
    if (resetGame) return setResetGame(false)
    if (blunders < attempts && hits === 8) {
      setWin(true)
      setResetGame(true)
    }
    if (blunders >= attempts) {
      setAttempts(0)
      setBlunders(0)
      setHits(0)
      setDifficulty('')
      setResetGame(true)
      setWin(false)
    }
  }, [blunders, hits])

  return {
    win,
    hits,
    attempts,
    blunders,
    resetGame,
    difficulty,
    handleDifficultyInformation,
    updateBlundersAndHits
  }
}
