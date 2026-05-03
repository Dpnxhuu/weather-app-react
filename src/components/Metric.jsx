// Metric.jsx
export default function Metric({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/20 px-4 py-3 backdrop-blur-md dark:border-white/5 dark:bg-white/5">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-white/40">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
      {sub ? (
        <p className="text-xs text-slate-500 dark:text-white/35">{sub}</p>
      ) : null}
    </div>
  )
}