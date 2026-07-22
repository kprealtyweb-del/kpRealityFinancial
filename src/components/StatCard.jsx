export default function StatCard({ value, label }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8">
      <div className="font-heading text-3xl font-bold text-primary sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 font-heading text-xs font-semibold uppercase tracking-wider text-paragraph sm:text-sm">
        {label}
      </div>
    </div>
  )
}
