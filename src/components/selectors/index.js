import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapSelector } from '../../redux/selectors';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import { Slider } from '../slider';
import { withStyles } from '@material-ui/core';
import { changeMapParams, changeSpeed, restart } from '../../redux/actions';
import {
    MAX_MAP_WIDTH,
    MIN_MAP_WIDTH,
    MAX_MAP_HEIGHT,
    MIN_MAP_HEIGHT,
    MAX_MAP_SPEED,
    MIN_MAP_SPEED,
    INIT_WIDTH,
    INIT_HEIGHT,
    INIT_X,
    INIT_Y,
    INIT_SPEED,
} from '../../constants';
import styles from './styles';

export const Selectors = withStyles(styles)(
    (props) => {
        const { classes, className } = props;
        const dispatch = useDispatch();
        const mapState = useSelector(mapSelector);
        const [size, setSize] = useState(mapState.size);
        const [start, setStart] = useState(mapState.start);
        const [speed, setSpeed] = useState(mapState.speed);

        const handleApply = useCallback(() => {
            if (mapState.size.width !== size.width
                || mapState.size.height !== size.height
                || mapState.start.x !== start.x
                || mapState.start.y !== start.y) {
                dispatch(changeMapParams(size, start, speed))
            } else if (mapState.speed !== speed) {
                dispatch(changeSpeed(speed));
            } else {
                dispatch(restart());
            }
        }, [dispatch, size, start, speed, mapState]);

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={cx(classes.map, classes.section)}>
                        <h4 className={classes.section_title}>Параметры мира</h4>
                        <div className={classes.selectors_container}>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Ширина:</h5>
                                <Slider
                                    defaultValue={INIT_WIDTH}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={MIN_MAP_WIDTH}
                                    max={MAX_MAP_WIDTH}
                                    onChange={(_, value) => setSize((prev) => ({ ...prev, width: value }))}
                                />
                            </div>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Высота:</h5>
                                <Slider
                                    defaultValue={INIT_HEIGHT}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={MIN_MAP_HEIGHT}
                                    max={MAX_MAP_HEIGHT}
                                    onChange={(_, value) => setSize((prev) => ({ ...prev, height: value }))}
                                />
                            </div>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Скорость в&nbsp;секундах:</h5>
                                <Slider
                                    defaultValue={INIT_SPEED}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={0.2}
                                    min={MIN_MAP_SPEED}
                                    max={MAX_MAP_SPEED}
                                    onChange={(_, value) => setSpeed(value * 1000)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx(classes.pos, classes.section)}>
                        <h4 className={classes.section_title}>Изначальная позиция</h4>
                        <div className={classes.selectors_container}>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Ось&nbsp;X:</h5>
                                <Slider
                                    defaultValue={INIT_X}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={size.width}
                                    onChange={(_, value) => setStart((prev) => ({ ...prev, x: value }))}
                                />
                            </div>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Ось&nbsp;Y:</h5>
                                <Slider
                                    defaultValue={INIT_Y}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={size.height}
                                    onChange={(_, value) => setStart((prev) => ({ ...prev, y: value }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.button_container}>
                    <Button
                        className={cx(classes.button_apply, className)}
                        onClick={handleApply}>
                            Применить
                    </Button>
                </div>
            </div >
        )
    });