import { cn } from '../../lib/utils'
import { trackCtaClick } from '../../lib/track'
import './button-3d.css'

function Button3D({ href = '#', label, className }) {
  return (
    <a
      href={href}
      className={cn('button-3d', className)}
      onClick={() => trackCtaClick(label)}
    >
      <span className="button-3d-bg" />
      <span className="button-3d-content">
        {label}
        <svg
          className="button-3d-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  )
}

export default Button3D
