import { motion } from 'motion/react'

function HandUnderline({
  color = 'var(--color-accent)',
  strokeWidth = 4,
  opacity = 1,
  delay = 0.3,
  className = '',
}) {
  return (
    <svg
      className={`absolute left-0 -bottom-2 h-[0.35em] w-full ${className}`}
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 14 C 40 7, 55 17, 90 12 C 125 7, 150 16, 198 9"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity={opacity}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export default HandUnderline
