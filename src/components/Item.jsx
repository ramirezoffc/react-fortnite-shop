import { ShopContext } from '../context'
import { useContext } from 'react'

export const Item = props => {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets: [{ full_background }],
  } = props

  const { addToBasket = Function.prototype } = useContext(ShopContext)

  return (
    <div className="card shop-item">
      <span className="card-title ">{displayName}</span>
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              regularPrice,
            })
          }
          className="btn indigo"
        >
          Купить
        </button>
        <span className="right flow-text">{regularPrice} v's</span>
      </div>
    </div>
  )
}
