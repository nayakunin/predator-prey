import {
    MAP_ADD_CREATURE,
    MAP_STEP,
    MAP_CHANGE_SIZE,
    MAP_INIT,
    MAP_RESTART,
} from '../actions'

import {
    copy,
    getNewPos,
    generate2dArray,
} from '../../utils';

const initialState = {
    iteration: 0,
    preysCount: 0,
    chartData: [0],
    chartLabels: ['0'],
    width: 35,
    height: 35,
    currentMap: [],
    nextMap: [],
    isMapCreated: false,
};

export const map = (state = initialState, action) => {
    switch (action.type) {
        case MAP_INIT:
        case MAP_RESTART:
            const initialMap = generate2dArray(state.width, state.height);
            return {
                ...state,
                iteration: 0,
                preysCount: 0,
                currentMap: copy(initialMap),
                nextMap: initialMap,
                isMapCreated: true,
            };
        case MAP_CHANGE_SIZE:
            const { width, height } = action.payload;
            const newMap = generate2dArray(width, height);
            return {
                ...state,
                iteration: 0,
                preysCount: 0,
                width: action.payload.width,
                height: action.payload.height,
                currentMap: copy(newMap),
                nextMap: newMap,
                isMapCreated: true,
            }
        case MAP_ADD_CREATURE:
            state.nextMap[action.payload.x][action.payload.y] = action.payload.type;
            return {
                ...state,
                preysCount:
                    action.payload.type === 'prey'
                        ? state.preysCount + 1
                        : state.preysCount,
                currentMap: copy(state.nextMap),
                nextMap: state.nextMap,
            }
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
        default:
            return state;
    };
};
