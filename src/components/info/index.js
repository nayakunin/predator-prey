import React from 'react';
import styles from './styles.module.css';

export const Info = (props) => {
    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                <li className={styles.option}>
                    <h4 className={styles.title}>Среднее количество жертв за последние 100 итераций:</h4>
                    <p className={styles.value}>dsadasdsa</p>
                </li>
                <li className={styles.option}>
                    <h4 className={styles.title}>Среднее количество хищников за последние 100 итераций:</h4>
                    <p className={styles.value}>dsadsadsadas</p>
                </li>
                <li className={styles.option}>
                    <h4 className={styles.title}>Площадь мира:</h4>
                    <p className={styles.value}>dsadasdasdas</p>
                </li>
            </ul>
        </div>
    )
}
