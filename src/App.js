import React, { useEffect } from 'react';
import styles from './App.module.css';
import { Line } from 'react-chartjs-2';
import { connect, useDispatch, useSelector } from "react-redux";
import { initMap, addCreature, step } from './redux/actions';
import { Map } from './components/map';
import { Selectors } from './components/selectors';

const App = (props) => {
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
            <header className={styles.header}>
                <h1 className={styles.title}>Модель хищник-жертва</h1>
                <ul className={styles.menu}>
                    <li className={styles.menu__option}>Point1</li>
                    <li className={styles.menu__option}>Point2</li>
                    <li className={styles.menu__option}>Point3</li>
                </ul>
            </header>
            <main className={styles.main}>
                <section className={styles['map-container']}>
                    <Map
                        width={0.5}
                        map={mapState.currentMap}
                        isMapCreated={mapState.isMapCreated}
                    />
                </section>
                <section className={styles['chart-container']}>
                    <Line
                        data={{
                            labels: mapState.chartLabels,
                            datasets: [
                                {
                                    label: 'Жертвы',
                                    data: mapState.chartData,
                                    backgroundColor: '#e9c46a',
                                }
                            ]
                        }}
                        options={{
                            title: {
                                display: true,
                                text: 'Статистика',
                                fontSize: 24,
                                fontFamily: 'Roboto Mono',
                                fontColor: 'rgb(241, 241, 241)',
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontFamily: 'Roboto Mono',
                                    fontColor: 'rgb(241, 241, 241)',
                                },
                            },
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: true,
                                        color: 'rgba(241, 241, 241, 0.3)',
                                    },
                                    ticks: {
                                        fontColor: 'rgb(241, 241, 241)',
                                        fontFamily: 'Roboto Mono',
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Популяция",
                                        fontColor: 'rgb(241, 241, 241)',
                                        fontFamily: 'Roboto Mono',
                                        fontSize: 16,
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: true,
                                        color: 'rgb(241, 241, 241, 0.3)',
                                    },
                                    ticks: {
                                        fontColor: 'rgb(241, 241, 241)',
                                        fontFamily: 'Roboto Mono',
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Время существования модели",
                                        fontColor: 'rgb(241, 241, 241)',
                                        fontFamily: 'Roboto Mono',
                                        fontSize: 16,
                                    }
                                }],
                            }
                        }}
                    />
                    <Selectors />
                </section>
            </main>
        </div>

    );
}

export default connect(
    (state) => {
        return state;
    }
)(App);