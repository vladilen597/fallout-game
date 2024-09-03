import { inventoryItems } from '../../../../constants/inventoryItems'
import './Inventory.scss'

const Inventory = () => {
  return (
    <main className='inventory'>
      {inventoryItems.map((item: any, index: any) => {
        return (
          <div
            className='inventory__item'
            key={index}
            style={{
              backgroundImage: "url('" + item.image + "')",
            }}
          >
            <label className='inventory__name'>{item.name}</label>
            <p className='inventory__amount'>{item.amount}</p>
          </div>
        )
      })}
    </main>
  )
}

export default Inventory
