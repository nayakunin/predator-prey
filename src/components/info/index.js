import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { mapSelector } from '../../redux/selectors';
import styles from './styles.module.css';

export const Info = (props) => {
    const mapState = useSelector(mapSelector);
    const [preysAvg, setPreysAvg] = useState(0);


    useEffect(() => {
        if (mapState.chartData.length > 1) {
            setPreysAvg(
                mapState.chartData.slice(-100, -1)
                    .reduce((sum, curr) => sum + curr)
                    / (mapState.chartData.length < 100
                    ? mapState.chartData.length : 100));
        }
    }, [mapState.chartData]);

    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                <li className={styles.option}>
                    <h4 className={styles.title}>Среднее количество жертв за последние 100 итераций:</h4>
                    <p className={styles.value}>{preysAvg}</p>
                </li>
                <li className={styles.option}>
                    <h4 className={styles.title}>Среднее количество хищников за последние 100 итераций:</h4>
                    <p className={styles.value}>0</p>
                </li>
                <li className={styles.option}>
                    <h4 className={styles.title}>Площадь мира:</h4>
                    <p className={styles.value}>{mapState.size.width * mapState.size.height}</p>
                </li>
            </ul>
        </div>
    )
}
