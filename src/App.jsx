import AppHeader from './components/AppHeader.jsx'
import SearchBar from './components/SearchBar.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import WeatherPageShell from './components/WeatherPageShell.jsx'

export default function App() {
  return (
    <WeatherPageShell>
      <AppHeader />
      <SearchBar />
      <WeatherCard />
      {/* <p className="mt-8 text-center text-xs text-slate-600/80 dark:text-slate-500">
        UI preview — connect an API when you are ready.
      </p> */}
    </WeatherPageShell>
  )
}
