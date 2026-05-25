import { useContext } from 'react'
import { ShopContext } from '../context'

export const BasketItem = props => {
  const { mainId, displayName, regularPrice, quantity } = props
  const {
    handleRemove = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = useContext(ShopContext)

  return (
    <li className="collection-item flow-text">
      {displayName} x {quantity} = {quantity * regularPrice}
      <i
        className="material-icons qnt-btn "
        onClick={() => incQuantity(mainId)}
      >
        add
      </i>
      <i className="material-icons qnt-btn" onClick={() => decQuantity(mainId)}>
        remove
      </i>
      <span onClick={() => handleRemove(mainId)}>
        <i className="material-icons right close-btn">close</i>
      </span>
    </li>
  )
}
