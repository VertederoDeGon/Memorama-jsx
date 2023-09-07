import React from 'react'
import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'

export default function Hits () {
  const { hits } = useGameInformationManagement()
  return <h2>Hits: {hits}</h2>
}
