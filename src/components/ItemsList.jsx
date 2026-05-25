import { useContext } from 'react'
import { ShopContext } from '../context'
import { Item } from './Item'

export const ItemsList = props => {
  const { items = [] } = useContext(ShopContext)

  if (!items.length) {
    return <h3>Nemae nichogo</h3>
  }

  return (
    <div className="items">
      {items.map(item => (
        <Item key={item.mainId} {...item} />
      ))}
    </div>
  )
}
