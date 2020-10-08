
let reducer = (state = [], action) => {
    if(action.type == 'cart:addProduct') {
        state = [...state, action.payload]
    } else if (action.type == 'cart:removeProduct') {
        let oldState = [...state]
        let index = oldState.findIndex(prd => {
            if(prd._id == action.payload._id) return prd;
        })

        oldState.splice(index, 1)
        state = [...oldState]
    }
    return state
}

export default reducer