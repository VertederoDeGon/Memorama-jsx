import { memo } from 'react'
import json from './../memo.json'

export const Cover = memo(function () {
  return <img className='card-img' src={[...json][0].default} alt='' />
})
