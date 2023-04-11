import CartActionTypes from './action-types';

export const removeProductsFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCTS,
    payload
})

export const decreaseProductQuantity = (payload) => ({
    type: CartActionTypes.DECRESS_QUANTITY,
    payload
})

export const increaseProductQuantity = (payload) => ({
    type: CartActionTypes.ADD_QUANTITY,
    payload
})