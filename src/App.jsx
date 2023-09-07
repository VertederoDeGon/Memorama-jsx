import './App.css'
import { GameInformationProvider } from './Contexts/informationContext'
import Cards from './components/Cards'
import GameInformation from './components/GameInformation/GameInformation'
import LockScreen from './components/LockScreen/LockScreen'

function App () {
  return (
    <main className='main'>
      <h1>Memorama</h1>
      <div className='cards-container'>
        <Cards />
      </div>
      <GameInformationProvider>
        <GameInformation />
        <LockScreen />
      </GameInformationProvider>
    </main>
  )
}

export default App
