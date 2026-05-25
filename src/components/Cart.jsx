import { useContext } from 'react'
import { ShopContext } from '../context'

export const Cart = () => {
  const { order = 0, handleBasket = Function.prototype } =
    useContext(ShopContext)

  const quantity = order.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="cart  indigo darken-1" onClick={handleBasket}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}
