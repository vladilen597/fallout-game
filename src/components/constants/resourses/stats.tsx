import strengthPicture from './images/strength.png'
import perceptionPicture from './images/perception.png'
import endurancePicture from './images/endurance.png'
import charismaPicture from './images/charisma.png'
import intelligencePicture from './images/intelligence.png'
import agilityPicture from './images/agility.png'
import luckPicture from './images/luck.png'

const statsArray = [
  'STRENGTH',
  'PERCEPTION',
  'ENDURANCE',
  'CHARISMA',
  'INTELLIGENCE',
  'AGILITY',
  'LUCK',
]

const description: any = {
  strength: {
    stat: 'Strength allows you to hold more items in your inventory and increases your melee damage',
    picture: strengthPicture,
  },
  perception: {
    stat: "The better your perception, the quicker you'll spot enemies on the compass",
    picture: perceptionPicture,
  },
  endurance: {
    stat: 'Endurance increases max health, and your resistance to poison and radiation',
    picture: endurancePicture,
  },
  charisma: {
    stat: 'Charisma makes talking to people much easier',
    picture: charismaPicture,
  },
  intelligence: {
    stat: 'Intelligence increases the amount of Skills Points you are allowed to give your skills when you gain a Level',
    picture: intelligencePicture,
  },
  agility: {
    stat: 'Agility increases your APS in VATS combat mode',
    picture: agilityPicture,
  },
  luck: {
    stat: 'Luck increases your critical hit rate, plus increases all skills',
    picture: luckPicture,
  },
}

export { statsArray, description }
