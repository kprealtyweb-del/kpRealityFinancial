import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ServiceCard({ icon: Icon, title, description, features }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <div className="mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="mb-3 font-heading text-xl font-semibold text-heading">
        {title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-paragraph">
        {description}
      </p>
      {features && (
        <ul className="mb-6 flex-1 space-y-2.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2.5 text-sm text-paragraph">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <Link
        to="/contact"
        className="mt-auto inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary-hover"
      >
        <span>Get Quote</span>
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
