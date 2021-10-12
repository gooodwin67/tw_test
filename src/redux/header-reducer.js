let initialState = {
    showMenu: 0,
    showSign: 0
}

const headerReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SHOW-MENU': {
                return {
                    ...state,
                    showMenu: state.showMenu ? 0 : 1
                }
        }
        case 'SHOW-SIGN': {
            return {
                ...state,
                showSign: state.showSign ? 0 : 1
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

export const signShowAC = () => {
    return {
        type: 'SHOW-SIGN'
    }
}

export default headerReducer;