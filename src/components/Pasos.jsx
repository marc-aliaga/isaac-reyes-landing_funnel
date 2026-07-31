import Reveal from './Reveal'
import Button3D from './ui/Button3D'

const capturas = [
  '/images/proof-1.jpg',
  '/images/proof-2.jpg',
  '/images/proof-3.jpg',
  '/images/proof-4.jpg',
  '/images/proof-5.jpg',
]

const pasos = [
  {
    numero: '#1',
    titulo: 'Buscar vivienda',
    descripcion: 'Localiza propiedades con propietarios abiertos a alquilar para subalquilar.',
    imagen: '/images/paso1_1.jpg',
  },
  {
    numero: '#2',
    titulo: 'Negociar el alquiler',
    descripcion: 'Cierra un acuerdo por escrito con el propietario, incluyendo su consentimiento expreso para subarrendar.',
    imagen: '/images/paso_2.png',
  },
  {
    numero: '#3',
    titulo: 'Subalquilar y generar ingresos',
    descripcion: 'Publica las habitaciones o estancias y empieza a cobrar cada mes.',
    imagen: '/images/paso-3.jpg',
  },
]

function Pasos() {
  return (
    <section className="bg-bg px-6 py-32 md:py-44">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-5xl md:text-6xl tracking-wide">
          Así puedes generar ingresos
        </h2>
      </Reveal>

      <div className="mx-auto mt-20 grid max-w-6xl gap-16 md:mt-28 md:grid-cols-3 md:gap-10">
        {pasos.map((paso, i) => (
          <Reveal key={paso.titulo} delay={i * 0.1} className="text-center">
            <h3 className="text-xl font-medium">
              <span className="text-accent">{paso.numero}</span> {paso.titulo}
            </h3>
            <div className="mt-6 aspect-4/3 w-full overflow-hidden rounded-2xl bg-bg-soft">
              <img
                src={paso.imagen}
                alt={paso.titulo}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm font-bold leading-relaxed text-white">
              {paso.descripcion}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 flex justify-center md:mt-20">
        <Button3D href="https://clasegratis.es" label="Empieza a generar tus primeros ingresos" />
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-3xl md:mt-20">
        <p className="text-center text-sm text-ink-muted">
          Capturas de ingresos reales
        </p>
        <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0">
          {capturas.map((src, i) => (
            <div
              key={src}
              className="aspect-9/16 w-36 shrink-0 snap-start overflow-hidden rounded-2xl bg-bg-soft sm:w-44 md:w-full md:shrink"
            >
              <img
                src={src}
                alt={`Captura de ingresos ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Pasos
