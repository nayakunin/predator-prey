import React, { useEffect, useState } from 'react';
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
    const [statsMaxHeight, setStatsMaxHeight] = useState();

    useEffect(() => {
        console.log(mapState.height * 25);
        setStatsMaxHeight(mapState.height * 25 > 700 ? `${mapState.height * 25 + 72}px` : '772px');
    }, [mapState.height, setStatsMaxHeight])

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
            <main className={styles.main}>
                <section className={styles['left-container']}>
                    <Header />
                    <div className={styles['map-container']}>
                        <Map
                            map={mapState.currentMap}
                            isMapCreated={mapState.isMapCreated}
                        />
                    </div>
                </section>
                <section className={styles['stats-container']} style={{ maxHeight: statsMaxHeight}}>
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