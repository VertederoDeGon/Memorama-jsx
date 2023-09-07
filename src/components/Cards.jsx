import { useEffect, useRef, useState } from 'react'
import Card from './Card'

import { CARDS } from '../hooks/cards'
import './Cards.css'

function shallowEqual (object1, object2) {
  //Function from:
  //https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#:~:text=The%20referential%20equality%20(using%20%3D%3D%3D,manual%20comparison%20of%20properties'%20values.
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  // cannot simply compare key-array lengths as lengths could be same while the keys themselves differ
  // cannot skip this check either and just check the values of all keys concatenated
  // because { "key": undefined }["key"] and {}["key"] would equal incorrectly
  for (const k of keys1) if (!keys2.includes(k)) return false
  for (const k of keys2) if (!keys1.includes(k)) return false
  for (const key of keys1) if (object1[key] !== object2[key]) return false
  return true
}
function compareCardsById (firstCardId, secondCardId) {
  let match
  console.warn('IF TRUE: THEY ARE EQUAL, ELSE IS FALSE')
  if (firstCardId >= 100) match = firstCardId - 100 === secondCardId
  if (secondCardId >= 100) match = secondCardId - 100 === firstCardId
  if (firstCardId > 100 && secondCardId > 100) match = false
  if (firstCardId < 100 && secondCardId < 100) match = false

  console.log({ match })
  return match
}

export default function Cards () {
  const [cards, setCards] = useState(CARDS)
  const [cardsToCompare, setCardsToCompare] = useState([])
  const newCard = useRef(null)

  const onChangeClick = id => {
    const wasClicked = cards.some(card => {
      if (card.id === id) return card.isClicked === true
    })
    if (wasClicked) return

    const addClickedCard = cards.map(card =>
      card.id === id ? { ...card, isClicked: true } : card
    )
    newCard.current = cards.find(card => card.id === id)

    setCards(addClickedCard)
  }

  useEffect(() => {
    if (newCard.current)
      setCardsToCompare(prevCards =>
        prevCards.length === 2 ? [] : [...prevCards, newCard.current]
      )
  }, [cards])

  useEffect(() => {
    if (cardsToCompare.length === 2) {
      console.log('IT IS TIME TO COMPARE', cardsToCompare)

      const [cardId1, cardId2] = cardsToCompare.map(card => card.id)
      const card1 = cards.find(card => card.id === cardId1)
      const card2 = cards.find(card => card.id === cardId2)
      const cardMatches = compareCardsById(cardId1, cardId2)

      const updatedCards = cards.map(card => {
        if (card1.id === card.id) return { ...card, isClicked: cardMatches }
        if (card2.id === card.id) return { ...card, isClicked: cardMatches }
        return card
      })

      setCards(updatedCards)
    }
  }, [cardsToCompare])

  return (
    <ul className='cards-wrapper'>
      {cards.map(card => {
        console.info('UPDATING THIS')

        return (
          <Card
            key={card.id}
            onChangeClick={onChangeClick}
            isClicked={card.isClicked}
            id={card.id}
            src={card.src}
            cover={card.default}
          />
        )
      })}
    </ul>
  )
}
