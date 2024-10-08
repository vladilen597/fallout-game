import { rookHouse, rookhousebasement, rookhouseinside } from './imageImports'

const questsDescription: any = {
  rookHouse: {
    completed: false,
    1: {
      image: rookHouse,
      description:
        'As you getting closer to the house, anxiety is wrapping you around more and more and you think about the only thing - there is nothing around. No people, no corpses. Nothing alive, nothing dead.',
      buttons: [
        {
          name: 'LOOK AROUND',
          toWindow: 2,
        },
        { name: 'GET INSIDE', toWindow: 3 },
      ],
    },
    2: {
      image: rookHouse,
      description:
        'There is nothing special about this house - before the War there were thousand of houses this kind',
      buttons: [{ name: 'GO BACK', toWindow: 1 }],
    },
    3: {
      image: rookhouseinside,
      description:
        "You entered the house. It's a very common house. Nothing was left after years of maraudering - even furniture is missing. But you can feel a very little of a smell. It seems familiar to you but you can't remember what it is.",

      buttons: [
        {
          name: 'GO BACK',
          toWindow: 1,
        },
        {
          name: 'SEARCH CLOSELY',
          toWindow: 4,
        },
      ],
    },
    4: {
      image: rookhouseinside,
      description:
        'After about 20 minutes of clearing garbage you found something interesting. At the right corner, under the stairs you found a very interesting hatch. It looks like nobody tried to clear that mess before you.',
      buttons: [
        { name: 'BREAK THE LOCK', toWindow: 5, requirements: { strength: 9 } },
        { name: 'GO BACK', toWindow: 3 },
      ],
    },
    5: {
      image: rookhousebasement,
      description:
        "You are witnessing the shocking picture: dead bodies everywhere, chopped, prepared for cooking. You're trying not to throw up just because of the worst smell in the world.",
      buttons: [
        {
          name: 'RUN OUT',
          toWindow: 1,
        },
        {
          name: 'SEARCH THE BODIES',
          toWindow: 6,
        },
      ],
    },
    6: {
      image: rookhousebasement,
      description: 'You found a bunch of steampacks',
      buttons: [
        {
          name: 'LEAVE THE HOUSE',
          toWindow: 1,
        },
      ],
      loot: {
        id: 'steampack',
        amount: 2,
      },
    },
  },
}

export default questsDescription
