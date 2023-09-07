import React from 'react'
import Attempts from './Attempts'
import Blunders from './Blunders'
import Difficulty from './Difficulty'
import './GameInformation.css'
import Hits from './Hits'
export default function GameInformation () {
  return (
    <div className='information'>
      <Blunders />
      <Attempts />
      <Hits />
      <Difficulty />
    </div>
  )
}
