export const MAP_STEP = 'MAP_STEP';
export const MAP_INIT = 'MAP_INIT';
export const MAP_RESTART = 'MAP_RESTART';
export const MAP_CHANGE_SPEED = 'MAP_CHANGE_SPEED';

export const initMap = () => {
    return {
        type: MAP_INIT,
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

export const changeSpeed = (speed) => {
    return {
        type: MAP_CHANGE_SPEED,
        payload: {
            speed,
        },
    };
};