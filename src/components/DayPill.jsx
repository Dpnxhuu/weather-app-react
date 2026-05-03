export default function DayPill({ day, high, low }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/20 px-3 py-3 text-center backdrop-blur-md dark:border-white/5 dark:bg-white/5">
      <span className="text-xs font-semibold text-slate-600 dark:text-white/50">
        {day}
      </span>
      <span className="text-sm font-bold text-slate-900 dark:text-white">
        {high}
      </span>
      <span className="text-xs text-slate-500 dark:text-white/35">{low}</span>
    </div>
  )
}