export const InitialState = {
    page: "Home",
    image: 0,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PAGE":
            return { ...state, page: action.payload }
        case "SET_IMAGE":
            return { ...state, image: action.payload }
        default:
            return state
    }
}
