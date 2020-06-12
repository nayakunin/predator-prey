export const MAP_CREATE = 'MAP_CREATE';
export const MAP_ADD_CREATURE = 'MAP_ADD_CREATURE';
export const MAP_STEP = 'MAP_STEP';

export const createMap = (width, height, value = 0) => {
    const result = [];
    for (let i = 0; i < height; i++) {
        const tmp = [];
        for (let j = 0; j < width; j++) {
            tmp.push('empty');
        }
        result.push(tmp);
    }
    return {
        type: MAP_CREATE,
        payload: result,
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
