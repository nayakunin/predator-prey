import _ from 'lodash';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const generate2dArray = (width, height, value = 'empty') => {
    const result = [];
    for (let i = 0; i < height; i++) {
        const tmp = [];
        for (let j = 0; j < width; j++) {
            tmp.push(value);
        }
        result.push(tmp);
    }
    result[getRandomInt(width)][getRandomInt(height)] = 'prey';
    return result;
}

export const copy = (ar) => ar.map(a => [...a]);

export const getNewPos = (x, y, map) => {
    const mapHeight = map.length;
    const mapWidth = map[0].length;
    const possibleMoves = [];

    if (y > 0 && map[x][y - 1] === 'empty') {
        possibleMoves.push([x, y - 1]);
    }
    if (x + 1 < mapWidth && map[x + 1][y] === 'empty') {
        possibleMoves.push([x + 1, y]);
    }
    if (y + 1 < mapHeight && map[x][y + 1] === 'empty') {
        possibleMoves.push([x, y + 1]);
    }
    if (x > 0 && map[x - 1][y] === 'empty') {
        possibleMoves.push([x - 1, y]);
    }
    // new prey
    if (possibleMoves.length === 4
        && map[x + 1][y + 1] === 'empty'
        && map[x + 1][y - 1] === 'empty'
        && map[x - 1][y - 1] === 'empty'
        && map[x - 1][y + 1] === 'empty') {
        const newBabyPreyPos = _.sample(possibleMoves);
        return [newBabyPreyPos, [x, y]];
    }
    if (!possibleMoves.length) {
        return false;
    }
    return [_.sample(possibleMoves)];
}