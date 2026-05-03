export default function Metric({ label, value, sub }) {
  return (
    <div className="rounded-2xl bg-white/50 px-4 py-3 backdrop-blur-sm dark:bg-slate-900/40">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
      {sub ? (
        <p className="text-xs text-slate-500 dark:text-slate-400">{sub}</p>
      ) : null}
    </div>
  )
}
