import React, { useEffect } from 'react';
import styles from './App.css';
import { connect, useDispatch, useSelector } from "react-redux";
import { createMap, addCreature, step } from './redux/actions';
import { Map } from './components/map';

const App = (props) => {
    const dispatch = useDispatch();
    const mapState = useSelector(state => state.map)

    useEffect(() => {
        dispatch(createMap(20, 20, 'empty'));
        dispatch(addCreature(10, 10, 'prey'));
    }, [dispatch]);

    useEffect(() => {
        if (mapState.isMapCreated) {
            const interval = setInterval(() => {
                dispatch(step());
              }, 500);
              return () => clearInterval(interval);
        }
    }, [dispatch, mapState.isMapCreated])

    return (
        <div className={styles.container}>
            <Map
                map={mapState.currentMap}
                isMapCreated={mapState.isMapCreated}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return state;
    }
)(App);