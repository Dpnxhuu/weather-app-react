import { createContext, useState } from 'react';
import useWeather from '../hooks/useWeather';

export const myContext = createContext();

export const ApiDataProvider = ({ children }) => {

    const [city, setCity] = useState('');

    const {weather, loading, error, forecast} = useWeather(city)

    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            setCity(e.target.value)
        }
    }

    return (
        <myContext.Provider value={{ weather, handleSearch, loading, error, forecast }} >
            {children}
        </myContext.Provider>
    )
}
