import React, {ChangeEventHandler, FC, FormEventHandler, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWeather, setLoading} from "../store/actions/weatherActions";
import {setAlert} from "../store/actions/alertActions";

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({title}: SearchProps) => {

    const [city, setCity] = useState('')

    const dispatch = useDispatch()

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
         setCity(e.target.value)
    }
    const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (city.trim() === '') {
            dispatch(setAlert('Enter city name'))
        }
        dispatch(setLoading())
        dispatch(getWeather(city))
        setCity('')
    }

    return (
        <div className={'hero is-light has-text-centered'}>
             <div className="hero-body">
                 <div className="container">
                     <h1 className="title">{title}</h1>
                     <form onSubmit={submitHandler} className={'py-5'}>
                         <input
                             className={'input has-text-centered mb-2'}
                             placeholder={'Enter city name'}
                             style={{maxWidth: 300}}
                             value={city}
                             onChange={changeHandler}
                             type="text"
                         />
                         <button style={{maxWidth: 300, margin: '0 auto'}} className="button is-primary is-fullwidth">Search</button>
                     </form>
                 </div>
             </div>
        </div>
    );
};

export default Search;
