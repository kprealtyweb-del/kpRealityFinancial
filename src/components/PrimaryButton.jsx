import { Link } from 'react-router-dom'

export default function PrimaryButton({ children, to, onClick, type = 'button', className = '' }) {
  const baseClasses = `inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-heading text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 ${className}`

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
