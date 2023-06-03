const initialState = {
    filters: {
        status: 'All',
        colors: []
    }
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}