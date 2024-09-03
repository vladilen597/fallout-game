const INCREMENT = 'INCREMENT'

const incrementStat = (statName: number) => {
  return {
    type: INCREMENT,
    payload: statName,
  }
}

export default incrementStat
