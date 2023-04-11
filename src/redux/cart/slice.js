import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addProduct: (state, action) => {
            // Verificar se o produto esta no carrinho
            const productIsAlredyInCart = state.products.some((products) => products.id === action.payload.id)

            if (productIsAlredyInCart) {
                state.products = state.products.map((products) =>
                    products.id === action.payload.id ?
                        { ...products, quantity: products.quantity + 1 }
                        : products
                )

                return;
            }

            state.products = [...state.products, { ...action.payload, quantity: 1 }]
        },

        removeProductsFromCart: (state, action) => {
            state.products = state.products.filter(products => products.id != action.payload)
        },

        decreaseProductQuantity: (state, action) => {
            state.products = state.products.map((products) =>
                products.id === action.payload ?
                    { ...products, quantity: products.quantity - 1 }
                    : products).filter(product => product.quantity > 0)
        },

        increaseProductQuantity: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload ?
                    { ...product, quantity: product.quantity + 1 }
                    : product)
        }
    }
})

export const {
    addProduct,
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductsFromCart
} = cartSlice.actions;

export default cartSlice.reducer;