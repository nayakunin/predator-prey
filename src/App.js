import React, { useEffect } from 'react';
import styles from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { initMap, addCreature, step } from './redux/actions';
import { Map } from './components/map';
import { Selectors } from './components/selectors';
import { Header } from './components/header';
import { Chart } from './components/chart';

export const App = (props) => {
    const dispatch = useDispatch();
    const mapState = useSelector(state => state.map);

    // Initiate map
    useEffect(() => {
        dispatch(initMap());
        dispatch(addCreature(2, 2, 'prey'));
    }, [dispatch]);

    // World loop
    useEffect(() => {
        if (mapState.isMapCreated) {
            const interval = setInterval(() => {
                dispatch(step());
            }, 1300);
            return () => clearInterval(interval);
        }
    }, [dispatch, mapState.isMapCreated]);

    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.main}>
                <section className={styles['map-container']}>
                    <Map
                        width={0.5}
                        map={mapState.currentMap}
                        isMapCreated={mapState.isMapCreated}
                    />
                </section>
                <section className={styles['chart-container']}>
                    <Chart 
                        data={mapState.chartData}
                        labels={mapState.chartLabels}
                    />
                    <Selectors />
                </section>
            </main>
        </div>

    );
}