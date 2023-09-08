import { useCard } from '../hooks/useCard'
import './Card.css'

export default function Card ({ id, src, cover, isClicked, onChangeClick }) {
  const { flip, setFlip } = useCard({ isClicked })
  const handleClick = e => {
    e.preventDefault()
    onChangeClick(id)
    setFlip(true)
  }

  return (
    <li className='card-item'>
      {
        <img
          className='card-img'
          onClick={handleClick}
          src={flip ? src : cover}
          alt={isClicked ? id : 'card'}
        />
      }
    </li>
  )
}
