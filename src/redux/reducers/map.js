import {
    MAP_ADD_CREATURE,
    MAP_STEP,
    MAP_CHANGE_PARAMS,
    MAP_INIT,
    MAP_RESTART,
    MAP_CHANGE_SPEED,
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
    size: {
        width: 26,
        height: 26,
    },
    start: {
        x: 13,
        y: 13,
    },
    speed: 1000,
    currentMap: [],
    nextMap: [],
    isMapCreated: false,
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
        case MAP_CHANGE_PARAMS:
            return {
                ...state,
                iteration: 0,
                preysCount: 0,
                size: action.payload.size,
                start: action.payload.start ? action.payload.start : state.start,
                speed: action.payload.speed ? action.payload.speed : state.speed,
                currentMap: [],
                nextMap: [],
                isMapCreated: false,
            }
        case MAP_ADD_CREATURE:
            state.nextMap[action.payload.start.x][action.payload.start.y] = action.payload.type;
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
        case MAP_CHANGE_SPEED:
            console.log('pidr');
            return {
                ...state,
                speed: action.payload.speed,
            }
        default:
            return state;
    };
};
