import CartActionTypes from './action-types'

const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCTS:
            // Verificar se o produto esta no carrinho
            const productIsAlredyInCart = state.products.some((products) => products.id === action.payload.id)

            if (productIsAlredyInCart) {
                return {
                    ...state,
                    products: state.products.map((products) =>
                        products.id === action.payload.id ?
                            { ...products, quantity: products.quantity + 1 }
                            : products)
                }
            }

            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1 }],
            }

        case CartActionTypes.REMOVE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter(products => products.id != action.payload)
            }

        case CartActionTypes.DECRESS_QUANTITY:
            return {
                ...state,
                products: state.products.map((products) =>
                products.id === action.payload ?
                    { ...products, quantity: products.quantity - 1 }
                    : products).filter(product => product.quantity > 0)
            }

        case CartActionTypes.ADD_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload ?
                        { ...product, quantity: product.quantity + 1 }
                        : product)
            }

        default:
            return state;
    }
}

export default cartReducer;