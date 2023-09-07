import { createContext, useMemo, useState } from 'react'

export const CardsContext = createContext(null)

export function CardsProvider ({ children }) {
  const [clickable, setClickable] = useState(false)
  const cardsValue = useMemo(
    () => ({
      clickable,
      setClickable
    }),
    [clickable]
  )

  return (
    <CardsContext.Provider value={cardsValue}>{children}</CardsContext.Provider>
  )
}
