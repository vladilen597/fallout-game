import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import pic from './images/vaultboy.png'

import './CharacterCreation.scss'
import { Link } from 'react-router-dom'
import Input from '../Shared/Input/Input'
import saveCharacter from '../../store/actions/saveCharacterAction'
import SpecialInput from './SpecialInput/SpecialInput'
import SpecialOutput from './SpecialOutput/SpecialOutput'
import SubmitCharacter from './SubmitCharacter/SubmitCharacter'
import SingleStat from './SingleStat/SingleStat'

const CharacterCreation = () => {
  const [characterName, setCharacterName] = useState('')
  const [hoveredStat, setHoveredStat] = useState('strength')

  const characterStats = useSelector((state: any) => state.characterStats)
  const dispatch = useDispatch()

  const saveStats = (name: string) => {
    dispatch(saveCharacter(name))
  }

  const alertUncompleted = (remainingPoints: number) => {
    alert(
      `You have ${remainingPoints} unspent points!` +
        (characterName.length < 3
          ? " Player's name should be at least 3 characters long!"
          : '')
    )
  }

  const handleNameChange = (e: any) => {
    setCharacterName(e.target.value)
  }

  const saveName = () => {
    localStorage.setItem('name', characterName)
    localStorage.setItem(
      'stats',
      JSON.stringify({
        strength: characterStats.special.strength,
        perception: characterStats.special.perception,
        endurance: characterStats.special.endurance,
        charisma: characterStats.special.charisma,
        intelligence: characterStats.special.intelligence,
        agility: characterStats.special.agility,
        luck: characterStats.special.luck,
      })
    )
    saveStats(characterName)
  }

  return (
    <div className='character-creation'>
      <Link to='/three-game' className='character-creation__back'>
        To new game
      </Link>
      <div className='character-creation__left-side'>
        <img className='character-creation__vaultboy' src={pic} />
        <div>
          <label className='character-creation__name'>
            <span>CHARACTER NAME:</span>
            <Input text={characterName} updateText={handleNameChange} />
          </label>
          <div className='character-creation__output-wrapper'>
            <SpecialInput setHoveredStat={setHoveredStat} />
            <SpecialOutput />
          </div>
          <div className='character-creation__remaining-points'>
            Remaining points: {characterStats.special.remainingPoints}
          </div>
          <SubmitCharacter
            saveName={saveName}
            alertUncompleted={alertUncompleted}
          />
        </div>
      </div>
      <div className='character-creation__right-side'>
        <SingleStat statName={hoveredStat.toLocaleLowerCase()} />
      </div>
    </div>
  )
}

export default CharacterCreation
