export const CREATE_MAP = 'CREATE_MAP';
export const UPDATE_MAP = 'UPDATE_MAP';

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
        type: CREATE_MAP,
        payload: result,
    };
};

export const addCreature = (x, y, type) => {
    return {
        type: UPDATE_MAP,
        payload: {x, y, type},
    };
};