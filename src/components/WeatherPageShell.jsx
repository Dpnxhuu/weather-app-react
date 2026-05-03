export default function WeatherPageShell({ children }) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-gradient-to-br from-sky-200 via-indigo-100 to-violet-200 font-sans text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-white">
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-500/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-violet-300/35 blur-3xl dark:bg-violet-600/15"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-10 pt-14 sm:px-6 sm:pt-16">
        {children}
      </div>
    </div>
  )
}
