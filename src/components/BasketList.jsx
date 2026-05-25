import { useContext } from 'react'
import { ShopContext } from '../context'
import { BasketItem } from './BasketItem'

export const BasketList = () => {
  const { handleBasket = Function.prototype, order = [] } =
    useContext(ShopContext)

  const totalPrice = order.reduce(
    (acc, item) => acc + item.regularPrice * item.quantity,
    0,
  )

  return (
    <ul className="collection basket-list">
      <li className="collection-item active indigo darken-1">
        Корзина
        <span>
          <i className="material-icons right close-btn" onClick={handleBasket}>
            close
          </i>
        </span>
      </li>
      {order.length ? (
        order.map(item => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active indigo darken-1">
        Общая стоимость: {totalPrice} v's
      </li>
    </ul>
  )
}
