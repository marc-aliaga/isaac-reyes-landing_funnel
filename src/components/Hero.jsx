import { motion } from 'motion/react'
import HandUnderline from './ui/HandUnderline'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-bg/75" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wide"
        >
          Cómo generé +150.000 € con{' '}
          <span className="relative inline-block whitespace-nowrap">
            Rent to Rent
            <HandUnderline delay={1} />
          </span>{' '}
          a los 19 años
        </motion.h1>
        <motion.p variants={item} className="mt-6 text-lg text-ink-muted">
          Te muestro la estrategia que estoy utilizando, los errores que cometí
          y lo que realmente funciona en este negocio.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
