import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const trayectoria = [
  {
    year: '2019',
    text: 'Clases online. Mascarilla. Una Play escondida bajo la mesa. Sin rumbo, como la mayoría.',
    imagen: '/images/trayectoria-1.png',
    fit: 'contain',
  },
  {
    year: '2020',
    text: 'Me gradué y no sentí nada. Un papel que no cambió nada. Seguía sin rumbo.',
    imagen: '/images/trayectoria-2.jpg',
  },
  {
    year: '2022',
    text: 'Descubrí un modelo sin comprar propiedades, sin herencias, sin enchufes. Solo estrategia.',
    imagen: '/images/trayectoria-3.jpg',
  },
  {
    year: '2024',
    text: 'Hoy sigo escalando mi empresa de rent to rent, con 19 años. Sin oficina, sin jefe. Solo un teléfono y un método.',
    imagen: '/images/trayectoria-4.jpg',
  },
]

function Frame({ progress, index, total, data }) {
  const step = 1 / total
  const start = index * step
  const end = start + step
  const buffer = step * 0.15
  const isFirst = index === 0
  const isLast = index === total - 1

  const opacity = useTransform(progress, (p) => {
    if (!isFirst) {
      if (p <= start) return 0
      if (p < start + buffer) return (p - start) / buffer
    }
    if (!isLast) {
      if (p >= end) return 0
      if (p > end - buffer) return 1 - (p - (end - buffer)) / buffer
    }
    return 1
  })

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <img
        src={data.imagen}
        alt={`Isaac Reyes en ${data.year}`}
        className={`h-full w-full ${data.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/60" />
      <div className="absolute inset-x-0 top-[62%] px-6 text-center">
        <span className="font-display text-4xl text-accent">{data.year}</span>
        <p className="mx-auto mt-3 max-w-md text-lg text-ink-muted">
          {data.text}
        </p>
      </div>
    </motion.div>
  )
}

function AboutMe() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="historia" ref={targetRef} className="relative h-[400vh] bg-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-x-0 top-14 z-10 text-center md:top-20">
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Mi historia
          </h2>
        </div>

        {trayectoria.map((data, i) => (
          <Frame
            key={data.year}
            progress={scrollYProgress}
            index={i}
            total={trayectoria.length}
            data={data}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutMe
