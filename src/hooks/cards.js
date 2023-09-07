import json from '../memo.json'

const shuffleCards = cards => {
  const newCards = structuredClone(cards)
  let i = newCards.length
  while (i > 0) {
    i -= 1
    let temp = Math.floor(Math.random() * (i + 1))
    ;[newCards[temp], newCards[i]] = [newCards[i], newCards[temp]]
  }
  return newCards
}

const duplicateCards = [
  ...json,
  ...[...json].map((card, id) => ({
    ...card,
    id: id
  }))
]

const cards = shuffleCards(duplicateCards)
export const CARDS = cards.map(card => ({
  ...card,
  isClicked: false
}))

export const CARDS_IMGS = [...cards.map(card => card.src), CARDS[0].default]

// export function useCards () {
//   const cardsContext = useContext(CardsContext)
//   if (cardsContext === undefined)
//     throw new Error('useCards must be used within a CardsProvider')

//   const { isClicked, setIsClicked } = cardsContext

//   const [cards, setCards] = useState([])
//   const shuffleCards = useCallback(
//     cards => {
//       const newCards = structuredClone(cards)
//       let i = newCards.length
//       while (i > 0) {
//         i -= 1
//         let temp = Math.floor(Math.random() * (i + 1))
//         ;[newCards[temp], newCards[i]] = [newCards[i], newCards[temp]]
//       }
//       return newCards
//     },
//     [cards]
//   )

//   const duplicateCards = useMemo(
//     () => [
//       ...json,
//       ...[...json].map((card, id) => ({
//         ...card,
//         id: id
//       }))
//     ],
//     []
//   )

//   const shuffledCards = shuffleCards(duplicateCards)

//   useEffect(() => {
//     setCards(shuffledCards)
//   }, [])
//   return {
//     cards
//   }
// }
