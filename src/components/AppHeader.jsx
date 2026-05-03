export default function AppHeader() {
  const date = new Date();
  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600/80 dark:text-orange-300/70">
          Skycast
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Today&apos;s weather
        </h1>
      </div>
      <div className="rounded-full border border-black/10 bg-white/30 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/60">
        {day},{' '}{dateStr}
      </div>
    </header>
  );
}