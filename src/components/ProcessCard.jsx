export default function ProcessCard({ step, title, description }) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <div className="mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white shadow-xs">
        {step}
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold text-heading">
        {title}
      </h3>
      <p className="mt-auto text-sm leading-relaxed text-paragraph">
        {description}
      </p>
    </div>
  )
}
