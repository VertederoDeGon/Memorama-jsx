import { useEffect, useRef, useState } from 'react'
import './Card.css'

export default function Card ({ id, src, cover, isClicked, onChangeClick }) {
  const [delay, setDelay] = useState(isClicked)
  const timeout = useRef(null)

  const handleClick = e => {
    e.preventDefault()
    onChangeClick(id)
    setDelay(true)
  }

  useEffect(() => {
    if (!isClicked) {
      setDelay(!isClicked)
      timeout.current = setTimeout(() => {
        setDelay(isClicked)
      }, 1000)
    }

    return () => {
      clearTimeout(timeout.current)
    }
  }, [isClicked])

  useEffect(() => {
    setDelay(false)
  }, [])

  return (
    <li className='card-item'>
      {
        <img
          className='card-img'
          onClick={handleClick}
          src={delay ? src : cover}
          alt={isClicked ? id : 'card'}
        />
      }
    </li>
  )
}
