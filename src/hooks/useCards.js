import { useCallback, useEffect, useRef, useState } from 'react'
import { compareCardsById, duplicateCards, shuffleCards } from '../utils/cards'
import { useGameInformationManagement } from './useGameInformationManagement'

export function useCards () {
  const { resetGame, updateBlundersAndHits } = useGameInformationManagement()
  const [cards, setCards] = useState([...duplicateCards])
  const [cardsToCompare, setCardsToCompare] = useState([])
  const shuffledCards = useRef(null)
  const newCardToAdd = useRef(null)

  useEffect(() => {
    if (resetGame) {
      shuffledCards.current = shuffleCards(duplicateCards)
      console.log({ shuffledCards: shuffledCards.current })
      setCards(shuffledCards.current)
    }
  }, [resetGame])

  useEffect(() => {
    if (newCardToAdd.current)
      setCardsToCompare(prevCards =>
        prevCards.length === 2 ? [] : [...prevCards, newCardToAdd.current]
      )
  }, [cards])

  useEffect(() => {
    if (cardsToCompare.length === 2) {
      console.log('IT IS TIME TO COMPARE', cardsToCompare)

      const [cardId1, cardId2] = cardsToCompare.map(card => card.id)
      const card1 = cards.find(card => card.id === cardId1)
      const card2 = cards.find(card => card.id === cardId2)
      const cardMatches = compareCardsById(cardId1, cardId2)
      //TODO
      updateBlundersAndHits(cardMatches)

      const updatedCards = cards.map(card => {
        if (card1.id === card.id) return { ...card, isClicked: cardMatches }
        if (card2.id === card.id) return { ...card, isClicked: cardMatches }
        return card
      })

      setCards(updatedCards)
    }
  }, [cardsToCompare])

  const onChangeClick = useCallback(
    id => {
      const wasClicked = cards.some(card => {
        if (card.id === id) return card.isClicked === true
      })
      if (wasClicked) return

      const addClickedCard = cards.map(card =>
        card.id === id ? { ...card, isClicked: true } : card
      )
      newCardToAdd.current = cards.find(card => card.id === id)

      setCards(addClickedCard)
    },
    [cards]
  )

  return { cards, onChangeClick }
}
