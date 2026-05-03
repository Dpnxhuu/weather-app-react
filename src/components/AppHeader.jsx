
export default function AppHeader() {

  const date = new Date();
  const day = date.toLocaleDateString('en-US', {weekday: 'short'});
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700/80 dark:text-sky-300/90">
          Skycast
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Today&apos;s weather
        </h1>
      </div>
      <div className="rounded-full border border-white/50 bg-white/40 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300">
        {day},{' '}{dateStr}
      </div>
    </header>
  )
}
