export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <div className="mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
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
