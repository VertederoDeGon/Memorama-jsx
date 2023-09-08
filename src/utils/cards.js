import json from '../memo.json'
export const duplicateCards = [
  ...json.map(card => ({
    ...card,
    isClicked: false
  })),
  ...json.map((card, id) => ({
    ...card,
    id: id,
    isClicked: false
  }))
]

export const shuffleCards = cards => {
  const newCards = structuredClone(cards)
  let i = newCards.length
  while (i > 0) {
    i -= 1
    let temp = Math.floor(Math.random() * (i + 1))
    ;[newCards[temp], newCards[i]] = [newCards[i], newCards[temp]]
  }
  return newCards
}
export const compareCardsById = (firstCardId, secondCardId) => {
  if (firstCardId >= 100) return firstCardId - 100 === secondCardId
  if (secondCardId >= 100) return secondCardId - 100 === firstCardId
  return false
}
