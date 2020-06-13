import React, { useEffect } from 'react';
import styles from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { initMap, addCreature, step } from './redux/actions';
import { Map } from './components/map';
import { Selectors } from './components/selectors';
import { Header } from './components/header';
import { Chart } from './components/chart';
import { Info } from './components/info';

export const App = (props) => {
    const dispatch = useDispatch();
    const mapState = useSelector(state => state.map);

    useEffect(() => {
        if (mapState.isMapCreated) {
            // World loop
            const interval = setInterval(() => {
                dispatch(step());
            }, mapState.speed);
            return () => clearInterval(interval);
        } else {
            // Init map
            dispatch(initMap());
            dispatch(addCreature(mapState.start, 'prey'));
        }
    }, [dispatch, mapState]);

    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.main}>
                <section className={styles['map-container']}>
                    <Map
                        map={mapState.currentMap}
                        isMapCreated={mapState.isMapCreated}
                    />
                </section>
                <section className={styles['stats-container']}>
                    <div className={styles['stats-block']}>
                        <Chart
                            data={mapState.chartData}
                            labels={mapState.chartLabels}
                        />
                    </div>
                    <div className={styles['stats-block']}>
                        <Selectors />
                    </div>
                    <div className={styles['stats-block']}>
                        <Info />
                    </div>
                </section>
            </main>
        </div>

    );
}