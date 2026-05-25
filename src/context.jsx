import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

export const ShopContext = createContext()

const initialState = {
  items: [],
  loading: true,
  order: [],
  isBasketVis: false,
  alertName: '',
}

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }

  value.handleRemove = id => {
    dispatch({ type: 'REMOVE_ITEM_FROM_BASKET', payload: { id } })
  }

  value.handleBasket = () => {
    dispatch({ type: 'SWITCH_BASKET_VIS' })
  }

  value.addToBasket = item => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item })
  }

  value.incQuantity = id => {
    dispatch({ type: 'INC_QUANTITY', payload: { id } })
  }

  value.decQuantity = id => {
    dispatch({ type: 'DEC_QUANTITY', payload: { id } })
  }

  value.setItems = data => {
    dispatch({ type: 'SET_ITEMS', payload: data })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
