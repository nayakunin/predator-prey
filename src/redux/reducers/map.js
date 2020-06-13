import {
    MAP_STEP,
    MAP_INIT,
    MAP_RESTART,
    MAP_CHANGE_SPEED,
} from '../actions'

import {
    copy,
    getNewPos,
    generate2dArray,
} from '../../utils';

import {
    INIT_WIDTH,
    INIT_HEIGHT,
    INIT_X,
    INIT_Y,
    INIT_SPEED,
} from '../../constants';

const initialState = {
    iteration: 0,
    preysCount: 0,
    chartData: [0],
    chartLabels: ['0'],
    size: {
        width: INIT_WIDTH,
        height: INIT_HEIGHT,
    },
    start: {
        x: INIT_X,
        y: INIT_Y,
    },
    speed: INIT_SPEED,
    currentMap: [],
    nextMap: [],
    isMapCreated: false,
    isMapEmpty: true,
};

export const map = (state = initialState, action) => {
    switch (action.type) {
        case MAP_INIT:
        case MAP_RESTART:
            const initialMap = generate2dArray(state.size.width, state.size.height);
            return {
                ...state,
                iteration: 0,
                preysCount: 0,
                chartData: [0],
                chartLabels: ['0'],
                currentMap: copy(initialMap),
                nextMap: initialMap,
                isMapCreated: true,
            };
        case MAP_STEP:
            let deltaPreys = 0;
            state.currentMap.forEach((col_arr, col) => {
                col_arr.forEach((_, row) => {
                    if (state.currentMap[col][row] !== 'empty') {
                        const newPoses = getNewPos(col, row, state.nextMap);
                        if (!newPoses) {
                            state.nextMap[col][row] = 'empty';
                            deltaPreys--;
                        } else {
                            switch (newPoses.length) {
                                case 2:
                                    newPoses.forEach((pos) => {
                                        state.nextMap[pos[0]][pos[1]] = 'prey';
                                    });
                                    deltaPreys++;
                                    break;
                                case 1:
                                    state.nextMap[newPoses[0][0]][newPoses[0][1]] = 'prey';
                                    state.nextMap[col][row] = 'empty';
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
            });
            return {
                ...state,
                iteration: state.iteration + 1,
                preysCount: state.preysCount + deltaPreys,
                chartLabels: [...state.chartLabels, `${state.iteration + 1}`],
                chartData: [...state.chartData, state.preysCount + deltaPreys],
                currentMap: copy(state.nextMap),
                nextMap: state.nextMap,
            };
        case MAP_CHANGE_SPEED:
            return {
                ...state,
                speed: action.payload.speed,
            }
        default:
            return state;
    };
};
