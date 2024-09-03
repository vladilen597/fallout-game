const SAVE_CHARACTER = 'SAVE_CHARACTER'

const saveCharacter = (name: string) => {
  return {
    type: SAVE_CHARACTER,
    payload: name,
  }
}

export default saveCharacter
