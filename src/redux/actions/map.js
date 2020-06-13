export const MAP_ADD_CREATURE = 'MAP_ADD_CREATURE';
export const MAP_STEP = 'MAP_STEP';
export const MAP_CHANGE_SIZE = 'MAP_CHANGE_SIZE';
export const MAP_INIT = 'MAP_INIT';
export const MAP_RESTART = 'MAP_RESTART';

export const initMap = () => {
    return {
        type: MAP_INIT,
    };
};

export const addCreature = (x, y, type) => {
    return {
        type: MAP_ADD_CREATURE,
        payload: {x, y, type},
    };
};

export const step = () => {
    return {
        type: MAP_STEP,
    };
};

export const restart = () => {
    return {
        type: MAP_RESTART,
    }
}

export const changeMapSize = (width, height) => {
    return {
        type: MAP_CHANGE_SIZE,
        payload: {
            width,
            height,
        },
    };
};
