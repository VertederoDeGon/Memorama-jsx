import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'

export default function Attempts () {
  const { attempts } = useGameInformationManagement()
  return <h2 className='attempts'>Attempts: {attempts}</h2>
}
