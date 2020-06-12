import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './App.css';
import { connect, useDispatch, useSelector } from "react-redux";
import { createMap, addCreature } from './redux/actions';
import { initMap } from './utils';
import { Map } from './components/map';
import { PredPreyView } from './utils/ppmvc';

const App = (props) => {
    const dispatch = useDispatch();
    const mapState = useSelector(state => state.map)
    // const [params, setParams] = useState({
    //     alpha: 0,
    //     beta: 0,
    //     gamma: 0,
    //     delta: 0,
    // });

    // const addAnimal = useCallback((x, y, map, type) => {
    //     map[x][y] = type;
    // }, []);

    // console.log(map);

    useEffect(() => {
        dispatch(createMap(20, 20, 'empty'));
    }, [dispatch]);

    useEffect(() => {
        if (mapState.isMapCreated) {
            dispatch(addCreature(0, 0, 'prey'));
        }
    }, [mapState.isMapCreated, dispatch]);

    // useEffect(() => {
    //     if (rect) {
    //         setView(new PredPreyView(canvasRef.current, rect));
    //     }
    // }, [rect]);

    // useEffect(() => {
    //     if (view) {
    //         view.redraw();
    //     }
    // }, [view])

    // useEffect(() => {
    //     if (map) {
    //         addAnimal(0, 0, map, 'prey');
    //     }
    // }, [map]);
    return (
        <div className={styles.container}>
            <Map
                map={mapState.map}
                isMapCreated={mapState.isMapCreated}
            />
            {/* <Selectors
        params={params}
        onChangeParams={handleChangeParams}
      /> */}
        </div>
    );
}

export default connect(
    (state) => {
        return state;
    }
)(App);