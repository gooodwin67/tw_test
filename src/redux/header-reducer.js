let initialState = {
    showMenu: 0
}

const menuShowReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SHOW-MENU': {
                return {
                    ...state,
                    showMenu: state.showMenu ? 0 : 1
                }
        }
        default:
            return state
    }

}

export const menuShowAC = () => {
    return {
        type: 'SHOW-MENU'
    }
}

export default menuShowReducer;