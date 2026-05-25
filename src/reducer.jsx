export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      }
    case 'REMOVE_ITEM_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(item => item.mainId !== payload.id),
      }
    case 'SWITCH_BASKET_VIS':
      return {
        ...state,
        isBasketVis: !state.isBasketVis,
      }
    case 'ADD_TO_BASKET':
      const itemIndex = state.order.findIndex(
        el => el.mainId === payload.mainId,
      )

      let newOrder = null
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        })
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      }
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.mainId === payload.id) {
            const newQuanitity = el.quantity + 1
            return {
              ...el,
              quantity: newQuanitity,
            }
          } else {
            return el
          }
        }),
      }
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.mainId === payload.id) {
            const newQuanitity = el.quantity - 1
            return {
              ...el,
              quantity: newQuanitity >= 0 ? newQuanitity : 0,
            }
          } else {
            return el
          }
        }),
      }
    case 'SET_ITEMS':
      return {
        ...state,
        items: payload || [],
        loading: false,
      }
    default:
      return state
  }
}
