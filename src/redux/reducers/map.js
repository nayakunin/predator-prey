import {
    CREATE_MAP,
    UPDATE_MAP,
} from '../actions'

const initialState = {
    map: [],
    isMapCreated: false,
};

export const map = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MAP:
            return {
                ...state,
                map: action.payload,
                isMapCreated: true,
            };
        case UPDATE_MAP:
            const mapCopy = state.map.map(a => a.map((b) => b));
            mapCopy[action.payload.x][action.payload.y] = action.payload.type;
            return {
                ...state,
                map: mapCopy,
            }
        default:
            return state;
    };
};
