import {
    MAP_CREATE,
    MAP_ADD_CREATURE,
    MAP_STEP,
} from '../actions'

import {
    copy,
    getNewPos,
} from '../../utils';

const initialState = {
    iteration: 0,
    preysCount: 0,
    currentMap: [],
    nextMap: [],
    isMapCreated: false,
};

export const map = (state = initialState, action) => {
    switch (action.type) {
        case MAP_CREATE:
            return {
                ...state,
                currentMap: copy(action.payload),
                nextMap: action.payload,
                isMapCreated: true,
            };
        case MAP_ADD_CREATURE:
            state.nextMap[action.payload.x][action.payload.y] = action.payload.type;
            return {
                ...state,
                preysCount: action.payload.type === 'prey' ? state.preysCount + 1 : state.preysCount,
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
                            switch(newPoses.length) {
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
            console.log(state.preysCount);
            return {
                ...state,
                iteration: state.iteration + 1,
                preysCount: state.preysCount + deltaPreys,
                currentMap: copy(state.nextMap),
                nextMap: state.nextMap,
            };
        default:
            return state;
    };
};
