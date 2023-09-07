import { createContext, useMemo, useState } from 'react'

export const GameInformationContext = createContext()

export function GameInformationProvider ({ children }) {
  const [blunders, setBlunders] = useState(0)
  const [hits, setHits] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [difficulty, setDifficulty] = useState('')

  const gameInformationValue = useMemo(
    () => ({
      attempts,
      difficulty,
      blunders,
      hits,
      setHits,
      setBlunders,
      setAttempts,
      setDifficulty
    }),
    [hits, blunders, attempts, difficulty]
  )

  return (
    <GameInformationContext.Provider value={gameInformationValue}>
      {children}
    </GameInformationContext.Provider>
  )
}
