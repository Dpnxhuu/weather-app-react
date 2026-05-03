import { useContext } from 'react'
import DayPill from './DayPill.jsx'
import { myContext } from '../context/ApiData.jsx'

export default function ForecastRow() {
  const { forecast } = useContext(myContext);
  const daily = {};

  if (!forecast?.list?.length) {
    return null;
  }

  forecast.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0];

    if (!daily[date]) {
      daily[date] = {
        day: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
      };
    } else {
      // har entry se compare karo
      if (item.main.temp_min < daily[date].temp_min) {
        daily[date].temp_min = item.main.temp_min;
      }
      if (item.main.temp_max > daily[date].temp_max) {
        daily[date].temp_max = item.main.temp_max;
      }
    }
  });

  const days = Object.values(daily).slice(0, 4).map(d => ({
    ...d,
    temp_min: Math.round(d.temp_min),
    temp_max: Math.round(d.temp_max),
  }));

  return (
    <div className="mt-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Next days
      </p>
      <div className="flex gap-2">
        {days.map((d) => (
          <DayPill key={d.day} day={d.day} high={`${d.temp_max}°C`} low={`${d.temp_min}°C`} />
        ))}
      </div>
    </div>
  )
}
