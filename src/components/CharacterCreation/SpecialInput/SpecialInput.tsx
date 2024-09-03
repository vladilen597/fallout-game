import { statsArray } from '../../constants/resourses/stats'
import SpecialItem from './SpecialItem/SpecialItem'
import './SpecialInput.scss'

const SpecialInput = ({ getStatPage, setHoveredStat }: any) => {
  return (
    <article className='special-input'>
      <ul className='special-input__list'>
        {statsArray.map((stat: any, index: number) => (
          <SpecialItem
            setHoveredStat={setHoveredStat}
            key={index}
            stat={stat}
            getStatPage={getStatPage}
          />
        ))}
      </ul>
    </article>
  )
}

export default SpecialInput
