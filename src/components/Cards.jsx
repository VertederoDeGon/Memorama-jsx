import Card from './Card'

import { useCards } from '../hooks/useCards'
import './Cards.css'

export default function Cards () {
  const { cards, onChangeClick } = useCards()

  return (
    <ul className='cards-wrapper'>
      {cards.map(card => {
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
