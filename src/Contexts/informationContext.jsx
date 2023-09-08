import { createContext, useMemo, useState } from 'react'

export const GameInformationContext = createContext()

export function GameInformationProvider ({ children }) {
  const [blunders, setBlunders] = useState(0)
  const [hits, setHits] = useState(0)
  const [resetGame, setResetGame] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [difficulty, setDifficulty] = useState('')
  const [win, setWin] = useState(false)

  const gameInformationValue = useMemo(
    () => ({
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
    }),
    [win, hits, blunders, attempts, difficulty, resetGame]
  )

  return (
    <GameInformationContext.Provider value={gameInformationValue}>
      {children}
    </GameInformationContext.Provider>
  )
}
