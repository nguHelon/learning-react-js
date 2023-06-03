const initialState = {
    filters: 'All',
    colors: []
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                ...state,
                filters: action.payload
            }
        }

        case 'filters/colorFilterChanged': {
            let { color, changeType } = action.payload;
            const { colors } = state;

            switch (changeType) {
                case 'added': {
                    if (colors.includes(color)) {
                        return state;
                    }

                    return {
                        ...state,
                        colors: state.colors.concat(color)
                    }
                }

                case 'remove': {
                    return {
                        ...state,
                        colors: state.colors.filter((existingColor) => {
                            return existingColor !== color;
                        })
                    }
                }

                default:
                    return state;
            }
        }

        default:
            return state;
    }
}