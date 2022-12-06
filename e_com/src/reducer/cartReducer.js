import React from 'react'

const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload
        // console.log(product)


        //Tackle the existing product 
        let existingProduct = state.cart.find(
            (ele) => ele.id === id + color
        )

        if (existingProduct) {
            let updatedProduct = state.cart.map((ele) => {
                if (ele.id === id + color) {
                    let newAmount = ele.amount + amount;
                    if (newAmount >= ele.max) {
                        newAmount = ele.max
                    }

                    return {
                        ...ele,
                        amount: newAmount,
                    };
                } else {
                    return ele;
                }
            })


            return {
                ...state,
                cart: updatedProduct
            }

        } else {
            let cartProduct;
            cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }

        }

    }

    //  to set the increment and decrement 
    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((ele) => {
            if (ele.id === action.payload) {
                let decAmount = ele.amount - 1
                if(decAmount<=1){
                    decAmount=1
                }
                return {
                    ...ele,
                    amount: decAmount
                }
            } else {
                return ele;
            }
        })
           return{...state,cart:updatedProduct}
    }

    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((ele) => {
            if (ele.id === action.payload) {
                let incAmount = ele.amount + 1
                if(incAmount>=ele.max){
                    incAmount=ele.max
                }
                return {
                    ...ele,
                    amount: incAmount
                }
            } else {
                return ele;
            }
        })
           return{...state,cart:updatedProduct}
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((ele) => ele.id !== action.payload)
        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    return state;
}

export default cartReducer