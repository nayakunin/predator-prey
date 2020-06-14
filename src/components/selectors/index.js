import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapSelector } from '../../redux/selectors';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import { Slider } from '../slider';
import { withStyles } from '@material-ui/core';
import { changeSpeed, restart } from '../../redux/actions';
import {
    MAX_MAP_SPEED,
    MIN_MAP_SPEED,
    INIT_SPEED,
} from '../../constants';
import styles from './styles';

export const Selectors = withStyles(styles)(
    (props) => {
        const { classes, className } = props;
        const dispatch = useDispatch();
        const mapState = useSelector(mapSelector);
        const [speed, setSpeed] = useState(mapState.speed);

        const handleRestart = useCallback(() => {
            dispatch(restart());
        }, [dispatch])

        useEffect(() => {
            dispatch(changeSpeed(speed));
        }, [dispatch, speed]);

        return (
            <div className={classes.root}>
                <h5 className={classes.label}>Время между&nbsp;итерациями:</h5>
                <Slider
                    defaultValue={INIT_SPEED}
                    getAriaValueText={value => value}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={0.1}
                    min={MIN_MAP_SPEED}
                    max={MAX_MAP_SPEED}
                    onChange={(_, value) => setSpeed(value * 1000)}
                />
                <Button
                    className={cx(classes.button_apply, className)}
                    onClick={handleRestart}
                >
                    Перезапустить
                </Button>
            </div >
        )
    });