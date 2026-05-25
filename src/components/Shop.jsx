import { useEffect, useContext } from 'react'
import { API_URL } from '../config'
import { ShopContext } from '../context'

import { Preloader } from './Preloader'
import { ItemsList } from './ItemsList'
import { Cart } from './Cart'
import { BasketList } from './BasketList'
import { Alert } from './Alert'

export const Shop = () => {
  const { loading, isBasketVis, alertName, setItems } = useContext(ShopContext)

  useEffect(() => {
    fetch(API_URL)
      .then(resp => resp.json())
      .then(data => setItems(data.shop))
    // eslint-disable-next-line
  }, [])

  return (
    <main className="container content shop">
      <Cart />
      {loading ? <Preloader /> : <ItemsList />}
      {isBasketVis && <BasketList />}
      {alertName && <Alert />}
    </main>
  )
}
