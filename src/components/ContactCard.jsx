export default function ContactCard({ icon: Icon, title, content, href }) {
  return (
    <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="mb-1 font-heading text-sm font-semibold text-heading">
          {title}
        </h4>
        {href ? (
          <a
            href={href}
            className="block truncate text-sm text-paragraph transition-colors duration-300 hover:text-primary"
          >
            {content}
          </a>
        ) : (
          <p className="text-sm leading-relaxed text-paragraph">{content}</p>
        )}
      </div>
    </div>
  )
}
