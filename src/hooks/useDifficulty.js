import { useEffect, useState } from 'react'
import { DIFFICULTIES_NAME } from '../utils/difficulties'

export default function useDifficulty ({ difficulty }) {
  const [color, setColor] = useState('')
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    if (isHovering) {
      switch (difficulty) {
        case DIFFICULTIES_NAME[0]:
          setColor('#88dd33')
          break
        case DIFFICULTIES_NAME[1]:
          setColor('#678ee0')
          break
        case DIFFICULTIES_NAME[2]:
          setColor('#cc564b')
          break
        case DIFFICULTIES_NAME[3]:
          setColor('#aa4bcc')
          break
      }
    } else setColor('')
  }, [isHovering])

  return { color, handleMouseEnter, handleMouseLeave }
}
