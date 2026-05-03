import Metric from './Metric.jsx'
import ForecastRow from './ForecastRow.jsx'
import { useContext } from 'react'
import { myContext } from '../context/ApiData.jsx'

export default function WeatherCard() {

  const { loading, weather, error } = useContext(myContext);


  const getWeatherIcon = (description) => {
    switch(description) {
      case 'clear sky': return <img src='/images/clear.png' alt='clear' className='size-14 object-contain'/>
      
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds': return <img src='/images/cloud.png' alt='cloud' className='size-14 object-contain'/>
      
      case 'mist':
      case 'haze':
      case 'fog':
      case 'smoke':
      case 'dust': return <img src='/images/mist.png' alt='mist' className='size-14 object-contain'/>
      
      case 'light rain':
      case 'moderate rain':
      case 'heavy intensity rain':
      case 'drizzle':
      case 'thunderstorm': return <img src='/images/rain.png' alt='rain' className='size-14 object-contain'/>
      
      case 'light snow':
      case 'heavy snow': return <img src='/images/snow.png' alt='snow' className='size-14 object-contain'/>
      
      default: return <img src='/images/cloud.png' alt='cloud' className='size-14 object-contain'/>
    }
  }

  const getDescription = (description) => {
    switch(description) {
      case 'clear sky': return 'Clear skies ahead. Great day to go outside.'
      case 'few clouds': return 'A few clouds but mostly sunny. Enjoy the day.'
      case 'scattered clouds': return 'Scattered clouds around. Pleasant weather overall.'
      case 'broken clouds': return 'Mostly cloudy skies. Keep a jacket handy.'
      case 'overcast clouds': return 'Completely overcast. Dull day ahead.'
      case 'light rain': return 'Light rain expected. Carry an umbrella.'
      case 'moderate rain': return 'Moderate rain. Better to stay indoors.'
      case 'heavy intensity rain': return 'Heavy rain warning. Avoid unnecessary travel.'
      case 'thunderstorm': return 'Thunderstorm warning. Stay indoors if possible.'
      case 'light snow': return 'Light snowfall expected. Drive carefully.'
      case 'heavy snow': return 'Heavy snowfall. Stay warm and avoid roads.'
      case 'mist': return 'Misty conditions. Visibility may be reduced.'
      case 'haze': return 'Visibility is low due to haze. Consider wearing a mask.'
      case 'fog': return 'Dense fog ahead. Drive slowly and use fog lights.'
      case 'dust': return 'Dusty conditions. Keep windows closed.'
      case 'smoke': return 'Smoky air. Avoid outdoor activities.'
      case 'drizzle': return 'Light drizzle. A raincoat should do.'
      case 'squalls': return 'Sudden squalls expected. Secure loose objects outside.'
      default: return 'Stay updated with the latest weather conditions.'
    }
  }


  if (loading) {
    return (
      <div className="flex justify-center items-center mt-40 mb-40">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!weather && !error) {
    return <p className="text-sm text-slate-500 mx-auto mt-8">Search city to see weather</p>
  }

  if (error) {
    return <article className={`flex flex-col rounded-[1.75rem] border border-white/50 bg-white/55 p-6 shadow-2xl shadow-indigo-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/50 dark:shadow-black/40 sm:p-8`}>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="/images/404.png" alt="error" className='h-auto w-auto' />
        <p className='text-[clamp(1.15rem,3vw,1.50rem)] font-semibold'>Oops! Location not found.</p>
      </div>
    </article>

  }

  return (
    <article className={`flex-1 flex-col rounded-[1.75rem] border border-white/50 bg-white/55 p-6 shadow-2xl shadow-indigo-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/50 dark:shadow-black/40 sm:p-8 ${weather ? 'flex' : 'hidden'}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            {weather.name}
          </h2>
          <p className="mt-0.5 text-sm font-medium text-slate-600 dark:text-slate-400">
            {weather.sys.country}
          </p>
        </div>
        {getWeatherIcon(weather.weather[0].description)}
      </div>

      <div className="mt-8 flex flex-wrap items-end gap-2">
        <span className="text-6xl font-bold tracking-tighter tabular-nums sm:text-7xl">
          {Math.round(weather.main.temp)}
        </span>
        <span className="pb-2 text-2xl font-semibold text-slate-500 dark:text-slate-400">
          °C
        </span>
        <span className="mb-2 ml-1 rounded-full bg-sky-500/15 px-3 py-1 text-sm font-semibold text-sky-800 dark:bg-sky-400/20 dark:text-sky-200">
          {weather.weather[0].description}
        </span>
      </div>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {getDescription(weather.weather[0].description)}
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <Metric label="Feels like" value={`${Math.round(weather.main.feels_like)}°C`} />
        <Metric label="Humidity" value={`${weather.main.humidity}%`} />
        <Metric label="Wind" value={(weather.wind.speed * 3.6).toFixed(1)} sub="km/h" />
      </div>

      <ForecastRow />
    </article>
  )
}
