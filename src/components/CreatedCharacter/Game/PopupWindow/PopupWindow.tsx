import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import getLoot from '../../../../store/actions/getLoot.jsx'

import './PopupWindow.scss'
import questsDescription from '../../../constants/questsDescription.js'
import unsetOver from '../../../../store/actions/unsetOver.js'
import setOver from '../../../../store/actions/setOver.js'

const PopupWindow = ({ investigateIsShown, toggleWindow, getLoot }: any) => {
  const [windowNumber, setWindowNumber] = useState(1)

  const requirementAccess = (object: any, prop: any) => {
    return object[prop]
  }

  const mapLoot = () => {
    const roomLoot = requirementAccess(
      questsDescription.rookHouse,
      windowNumber
    ).loot
    if (
      requirementAccess(questsDescription.rookHouse, windowNumber).loot !=
      undefined
    ) {
      getLoot(roomLoot.id, roomLoot.amount)
    }
  }

  useEffect(() => {
    mapLoot()
  }, [windowNumber])

  return (
    <main
      className='popup-window'
      style={investigateIsShown ? { display: 'block' } : { display: 'none' }}
    >
      <div className='top-bar'>
        <button className='top-bar__close-button' onClick={toggleWindow}>
          x
        </button>
      </div>
      <section className='point-description'>
        <img src={questsDescription.rookHouse[windowNumber].image} />
        <p className='point-description__text'>
          {questsDescription.rookHouse[windowNumber].description}
        </p>
        <div className='point-description__buttons'>
          {questsDescription.rookHouse[windowNumber].buttons.map(
            (button: any, index: any) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (button.requirements === undefined) {
                      setWindowNumber(button.toWindow)
                    }
                  }}
                >
                  {button.name}
                  {button.requirements != undefined
                    ? '[' +
                      Object.entries(
                        button.requirements
                      )[0][0].toLocaleUpperCase() +
                      ': ' +
                      Object.entries(button.requirements)[0][1] +
                      ']'
                    : ''}
                </button>
              )
            }
          )}
        </div>
      </section>
    </main>
  )
}

const mapStateToProps = (state: any) => {
  return {
    state: state.characterStats,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setOver: () => {
      dispatch(setOver())
    },
    unsetOver: () => {
      dispatch(unsetOver())
    },
    getLoot: (id: number, amount: number) => {
      dispatch(getLoot(id, amount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupWindow)
