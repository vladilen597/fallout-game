import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './SubmitCharacter.scss'

export const SubmitCharacter = ({ saveName, alertUncompleted }: any) => {
  const stats = useSelector((state: any) => state.characterStats)

  if (stats.special.remainingPoints !== 0) {
    return (
      <button
        className='submit-character'
        onClick={() => alertUncompleted(stats.special.remainingPoints)}
      >
        CREATE CHARACTER
      </button>
    )
  } else {
    return (
      <Link to='/character'>
        <button className='submit-character' onClick={saveName}>
          CREATE CHARACTER
        </button>
      </Link>
    )
  }
}

export default SubmitCharacter
