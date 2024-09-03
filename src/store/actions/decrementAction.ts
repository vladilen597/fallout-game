const DECREMENT = 'DECREMENT'

const decrementStat = (statName: number) => {
  return {
    type: DECREMENT,
    payload: statName,
  }
}

export default decrementStat
