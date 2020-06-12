import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

export const Pixel = (props) => {
    const [type, setType] = useState();

    useEffect(() => {
        switch (props.map[props.row][props.col]) {
            case 'prey':
                setType(styles.prey);
                break;
            case 'predator':
                setType(styles.predator);
                break;
            case 'food':
                setType(styles.food);
                break;
            default:
                setType();
                break;
        }
    }, [props]);

    return (
        <div className={styles.root}>
            <div className={cx(type, styles.circle)}></div>
        </div>
    )
}