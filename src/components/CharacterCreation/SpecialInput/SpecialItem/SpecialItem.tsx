import incrementStat from '../../../../store/actions/incrementAction'
import { useDispatch } from 'react-redux'

import './SpecialItem.scss'
import decrementStat from '../../../../store/actions/decrementAction'

const SpecialItem = ({ stat, setHoveredStat }: any) => {
  const dispatch = useDispatch()

  const incrementCharacterStat = (id: number) => {
    dispatch(incrementStat(id))
  }

  const decrementCharacterStat = (id: number) => {
    dispatch(decrementStat(id))
  }

  return (
    <li
      className='special-item'
      onMouseEnter={() => {
        setHoveredStat(stat)
      }}
    >
      <button
        className='special-item__button'
        onClick={() => {
          decrementCharacterStat(stat.toLocaleLowerCase())
        }}
      >
        -
      </button>
      <span className='special-item__name'>{stat}</span>
      <button
        className='special-item__button'
        onClick={() => {
          incrementCharacterStat(stat.toLocaleLowerCase())
        }}
      >
        +
      </button>
    </li>
  )
}

export default SpecialItem
