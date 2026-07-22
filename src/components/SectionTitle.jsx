export default function SectionTitle({ subtitle, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-10 max-w-2xl ${alignClass} ${align === 'center' ? 'mx-auto' : ''}`}>
      {subtitle && (
        <span className="mb-2.5 inline-block font-heading text-xs font-semibold tracking-wider text-primary uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="mb-3.5 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-paragraph">
          {description}
        </p>
      )}
    </div>
  )
}
