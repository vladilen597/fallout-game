import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharacterCreation from './components/CharacterCreation/CharacterCreation'
// import CreatedCharacter from './components/CreatedCharacter/CreatedCharacter'

import './App.scss'
import './reset.css'
import ThreejsVersion from './components/ThreejsVersion/ThreejsVersion'

const PageNotFound = () => {
  return <div>404</div>
}

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<CharacterCreation />} />
          {/* <Route path='/game' element={<CreatedCharacter />} /> */}
          <Route path='/three-game' element={<ThreejsVersion />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
