import { useEffect, useRef } from 'react'
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
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // iOS Safari a veces ignora el autoplay aunque esté muted+playsInline,
    // así que forzamos play() al montar y reintentamos en el primer gesto del usuario.
    video.muted = true

    const tryPlay = () => {
      video.play().catch(() => {})
    }

    tryPlay()

    document.addEventListener('touchstart', tryPlay, { once: true })
    document.addEventListener('scroll', tryPlay, { once: true, passive: true })

    return () => {
      document.removeEventListener('touchstart', tryPlay)
      document.removeEventListener('scroll', tryPlay)
    }
  }, [])

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        disablePictureInPicture
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
