export default function DayPill({ day, high, low }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-white/40 bg-white/30 px-3 py-3 text-center backdrop-blur-md dark:border-white/10 dark:bg-slate-900/30">
      <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
        {day}
      </span>
      <span className="text-sm font-bold text-slate-900 dark:text-white">
        {high}
      </span>
      <span className="text-xs text-slate-500 dark:text-slate-400">{low}</span>
    </div>
  )
}
