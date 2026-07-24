import { motion } from 'motion/react'

function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
