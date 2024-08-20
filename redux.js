import { Legacy_createStore } from "redux"

// reduce

const cartReducer = (
    state = {
    cart:[],

}, action) => {
    switch(action.type) {
        case"ADD_TO_CART":
        return {
            ...state,
            cart:[...state.cart, action.payload],
        }
        default:
            return state
    }
}

// store

const store = Legacy_createStore(cartReducer)
console.log("oncreate store : ", store.getState())

// subscribe

store.subscribe(() => {
    console.log("STORE_CHANGE : ", store.getState())
})

// dispatch

const action1 = { type: "ADD_TO_CART", payload: {id: 2, qyt: 20 } }
store.dispatch(action1)

const action2 = { type: "ADD_TO_CART", payload: {id: 1, qyt: 10 } }
store.dispatch(action2)