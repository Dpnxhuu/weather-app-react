export default function WeatherPageShell({ children }) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#fdf4ee] font-sans text-slate-900 dark:bg-[#0d0608] dark:text-white">

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-50px, 30px) scale(1.08); }
          66% { transform: translate(40px, -40px) scale(0.97); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, 40px) scale(1.05); }
          66% { transform: translate(-40px, -30px) scale(1.1); }
        }
        @keyframes blob4 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-35px, -45px) scale(1.12); }
        }
        .blob1 { animation: blob1 9s ease-in-out infinite; }
        .blob2 { animation: blob2 11s ease-in-out infinite; }
        .blob3 { animation: blob3 13s ease-in-out infinite 2s; }
        .blob4 { animation: blob4 8s ease-in-out infinite 1s; }
      `}</style>

      {/* LIGHT MODE blobs — soft peachy warm tones */}
      {/* Top left — warm peach */}
      <div
        className="blob1 pointer-events-none absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full bg-orange-300/50 blur-[130px] dark:bg-orange-600/35"
        aria-hidden
      />
      {/* Center top — soft rose */}
      <div
        className="blob2 pointer-events-none absolute left-1/2 -top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-300/40 blur-[110px] dark:bg-red-500/30"
        aria-hidden
      />
      {/* Bottom right — lavender/violet */}
      <div
        className="blob3 pointer-events-none absolute -bottom-20 -right-32 h-[480px] w-[480px] rounded-full bg-violet-300/45 blur-[120px] dark:bg-purple-700/40"
        aria-hidden
      />
      {/* Bottom left — amber */}
      <div
        className="blob4 pointer-events-none absolute -bottom-10 -left-20 h-72 w-72 rounded-full bg-amber-300/35 blur-[90px] dark:bg-rose-600/25"
        aria-hidden
      />
      {/* Center warmth */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/30 blur-[80px] dark:bg-amber-500/10"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-10 pt-14 sm:px-6 sm:pt-16">
        {children}
      </div>
    </div>
  )
}