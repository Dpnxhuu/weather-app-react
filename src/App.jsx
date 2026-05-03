import AppHeader from './components/AppHeader.jsx'
import SearchBar from './components/SearchBar.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import WeatherPageShell from './components/WeatherPageShell.jsx'
import {RiSunLine, RiMoonLine} from "react-icons/ri"
import {useDarkMode} from './hooks/useDarkMode.js'

export default function App() {

    const [isDark, setIsDark] = useDarkMode();

  return (
    <WeatherPageShell>
      <button className="cursor-pointer fixed left-2 top-2 md:hover:bg-gray-200 md:dark:hover:bg-white/10 rounded-lg px-2 py-2 transition-all duration-300"
        onClick={() => setIsDark(!isDark)}>
        {isDark ? <RiSunLine className="w-6 h-6 text-black dark:text-white" /> : <RiMoonLine className="w-6 h-6 text-black dark:text-white" />}
      </button>
      <AppHeader />
      <SearchBar />
      <WeatherCard />
    </WeatherPageShell>
  )
}
