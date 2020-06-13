import React from 'react';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Модель хищник-жертва</h1>
            {/* <ul className={styles.menu}>
                <li className={styles.menu__option}>Point1</li>
                <li className={styles.menu__option}>Point2</li>
                <li className={styles.menu__option}>Point3</li>
            </ul> */}
        </header>
    );
};
