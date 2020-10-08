
let initState = {
    language: 'english'
}

let reducer = (state = initState, action) => {

    if(action.type == 'userSettings:SET_LANGUAGE') {
        state = {...state, language: action.payload}
    }

    return state;
}

export default reducer