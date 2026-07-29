import { HiStar } from 'react-icons/hi2'

export default function TestimonialCard({ name, role, content, rating }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <HiStar key={i} className="h-5 w-5 text-accent" />
        ))}
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-paragraph italic">
        &ldquo;{content}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-sm font-semibold text-heading">{name}</p>
          <p className="text-xs text-paragraph">{role}</p>
        </div>
      </div>
    </div>
  )
}
