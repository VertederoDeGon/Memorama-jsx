import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'

export default function Blunders () {
  const { blunders } = useGameInformationManagement()
  return <h2 className='blunders'>Blunders: {blunders}</h2>
}
