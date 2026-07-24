import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'motion/react'

function Counter({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) motionValue.set(to)
  }, [isInView, to, motionValue])

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent =
            prefix + Math.floor(latest).toLocaleString('es-ES') + suffix
        }
      }),
    [springValue, prefix, suffix],
  )

  return <span ref={ref}>{prefix}0{suffix}</span>
}

export default Counter
