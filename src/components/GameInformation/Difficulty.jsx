import { useGameInformationManagement } from '../../hooks/useGameInformationManagement'

export default function Difficulty () {
  const { difficulty } = useGameInformationManagement()
  return <h2>Difficulty: {difficulty}</h2>
}
