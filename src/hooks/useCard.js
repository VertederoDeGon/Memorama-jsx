import { useEffect, useRef, useState } from 'react'

export function useCard ({ isClicked }) {
  const [flip, setFlip] = useState(isClicked)
  const timeout = useRef(null)

  useEffect(() => {
    if (!isClicked) {
      setFlip(!isClicked)
      timeout.current = setTimeout(() => {
        setFlip(isClicked)
      }, 1000)
    }

    return () => {
      clearTimeout(timeout.current)
    }
  }, [isClicked])

  useEffect(() => {
    setFlip(false)
  }, [])

  return { flip, setFlip }
}
