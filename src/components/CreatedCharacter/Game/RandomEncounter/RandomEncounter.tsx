import { connect } from 'react-redux'
import './RandomEncounter.scss'
import { randomEvents } from '../../../constants/randomEvents'

const RandomEncounter = ({ agility, toggleRandomEncounter }: any) => {
  const handleClick = () => {
    if (agility > 5) {
      alert('You succesfully ran from raider!')
      toggleRandomEncounter()
    } else {
      alert("You've lost 20 HP!")
      toggleRandomEncounter()
    }
  }

  return (
    <main className='random-encounter-window'>
      <p>You have met a raider</p>
      <img src={randomEvents.raider} />
      <button onClick={handleClick}>TRY TO RUN</button>
    </main>
  )
}

const mapStateToProps = (state: any) => {
  return {
    agility: state.characterStats.agility,
  }
}

export default connect(mapStateToProps)(RandomEncounter)
