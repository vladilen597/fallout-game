import { useState } from 'react'
import './Pipboy.scss'
import Stats from './Stats/Stats'
import Inventory from './Inventory/Inventory'

const Pipboy = ({ toggleInventory }: any) => {
  const [statWindowIsShown, setStatWindowIsShown] = useState(true)

  const handleSwitchToInventory = () => {
    setStatWindowIsShown(false)
  }

  const handleSwitchToStats = () => {
    setStatWindowIsShown(true)
  }

  return (
    <main className='pipboy'>
      <div className='pipboy__topline'>
        <button className='pipboy__topline-button' onClick={toggleInventory}>
          x
        </button>
      </div>
      <article className='pipboy__window'>
        {statWindowIsShown ? <Stats /> : <Inventory />}
        <nav className='pipboy__navigation'>
          <ul className='pipboy__navigation-list'>
            <li
              className='pipboy__navigation-list-item'
              onClick={handleSwitchToStats}
              style={
                statWindowIsShown
                  ? { color: 'rgb(27, 87, 54)' }
                  : { color: 'rgb(38, 202, 112)' }
              }
            >
              STATS
            </li>
            <li
              className='pipboy__navigation-list-item'
              onClick={handleSwitchToInventory}
              style={
                !statWindowIsShown
                  ? { color: 'rgb(27, 87, 54)' }
                  : { color: 'rgb(38, 202, 112)' }
              }
            >
              INVENTORY
            </li>
          </ul>
        </nav>
      </article>
    </main>
  )
}

export default Pipboy
