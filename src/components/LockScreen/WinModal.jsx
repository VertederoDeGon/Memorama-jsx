import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'

export default function WinModal () {
  const { win } = useGameInformationManagement()
  return win && <h2>You win!</h2>
}
