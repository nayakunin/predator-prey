import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapSelector } from '../../redux/selectors';
import { restart } from '../../redux/actions';
import { ReactComponent as Switch } from './switch.svg';
import styles from './styles.module.css';

export const Header = () => {
    const dispatch = useDispatch();
    const mapState = useSelector(mapSelector);

    const handleChange = useCallback(() => {
        dispatch(restart(!mapState.isPreyOnly));
    }, [dispatch, mapState]);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{
                mapState.isPreyOnly
                    ? 'Модель жертва' : 'Модель хищник-жертва'}
            </h1>
            <div className={styles.switch} onClick={handleChange}>
                <Switch />
            </div>
        </header>
    );
};
