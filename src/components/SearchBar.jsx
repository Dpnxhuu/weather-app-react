import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useContext } from 'react'
import { myContext } from '../context/ApiData'

export default function SearchBar() {
  const { handleSearch } = useContext(myContext);

  return (
    <div className="mb-6">
      <label className="sr-only" htmlFor="city-search">
        Search city
      </label>
      <div className="group relative">
        <HiMagnifyingGlass
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-orange-500 dark:text-white/30 dark:group-focus-within:text-orange-400"
        />
        <input
          id="city-search"
          type="search"
          placeholder="Search city or place…"
          onKeyDown={handleSearch}
          className="w-full cursor-default rounded-2xl border border-black/10 bg-white/30 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 shadow-lg shadow-orange-900/5 outline-none ring-orange-400/40 placeholder:text-slate-400 backdrop-blur-xl focus-visible:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/25 dark:shadow-black/20"
        />
      </div>
    </div>
  );
}