import React from 'react';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import { Slider } from '../slider';
import { withStyles } from '@material-ui/core';

const styles = {
    root: {
        padding: '0 15px',
        width: 'calc(100% - 30px)',
    },
    button_apply: {
        backgroundColor: '#52af77',
        color: 'rgb(241, 241, 241)',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
    },
    section: {

    },
    section_title: {
        margin: '0 0 10px',
    },
    selectors_container: {
        padding: '0 15px',
    },
    section_subtitle: {
        margin: 0,
        display: 'inline',
        marginRight: '5px',
    },
    row: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '5px',
    },
    button_container: {
        marginTop: '10px',
    },
};

export const Selectors = withStyles(styles)(
    (props) => {
        const { classes, className } = props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={cx(classes.map, classes.section)}>
                        <h4 className={classes.section_title}>Параметры мира</h4>
                        <div className={classes.selectors_container}>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Ширина:</h5>
                                <Slider
                                    defaultValue={35}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={10}
                                    max={35}
                                />
                            </div>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Высота:</h5>
                                <Slider
                                    defaultValue={35}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={10}
                                    max={35}
                                />
                            </div>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Скорость в&nbsp;секундах:</h5>
                                <Slider
                                    defaultValue={0.7}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={0.2}
                                    min={0.3}
                                    max={2}
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
                                    defaultValue={30}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={10}
                                    max={30}
                                />
                            </div>
                            <div className={classes.row}>
                                <h5 className={classes.section_subtitle}>Ось&nbsp;Y:</h5>
                                <Slider
                                    defaultValue={30}
                                    getAriaValueText={value => value}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={10}
                                    max={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.button_container}>
                    <Button className={cx(classes.button_apply, className)}>Перезапустить</Button>
                </div>
            </div >
        )
    });