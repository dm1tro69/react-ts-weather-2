import React, {FC} from 'react';
import './App.css';
import Search from "./components/Search";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import Weather from "./components/Weather";
import Alert from "./components/Alert";
import {setAlert} from "./store/actions/alertActions";
import {setError} from "./store/actions/weatherActions";

const App:FC = () => {
    const dispatch = useDispatch()
    const weatherData = useSelector((state: RootState) => state.weather.data)
    console.log(weatherData)
    const loading = useSelector((state: RootState) => state.weather.loading)
    const error = useSelector((state: RootState) => state.weather.error)
    const alert = useSelector((state: RootState) => state.alert.message)
  return (
    <div className="has-text-centered">
     <Search title={'Enter city name'}/>
        {weatherData && <Weather data={weatherData}/>}
        {alert && <Alert message={alert} onClose={()=> dispatch(setAlert(''))}/>}
        {error && <Alert message={error} onClose={()=> dispatch(setError())}/>}
    </div>
  );
}
export default App;
