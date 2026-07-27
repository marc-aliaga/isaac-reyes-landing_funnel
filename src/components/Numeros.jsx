import Counter from './Counter'
import Reveal from './Reveal'
import Button3D from './ui/Button3D'

const metricas = [
  { to: 27, suffix: '', label: 'Propiedades gestionadas' },
  { to: 150000, prefix: '€', label: 'Facturados con Rent to Rent' },
  { to: 140, suffix: '+', label: 'Alumnos formados' },
  { to: 3, label: 'Años de experiencia en rent to rent' },
]

function Numeros() {
  return (
    <section id="numeros" className="relative bg-bg px-6 py-32 md:py-44">
      <div className="absolute -top-6 left-1/2 z-20 -translate-x-1/2">
        <Button3D href="#historia" label="Descubre la historia completa" />
      </div>

      <div className="mx-auto flex max-w-2xl flex-col gap-20 md:gap-28">
        {metricas.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.05} className="text-center">
            <div className="font-display text-6xl md:text-7xl text-accent">
              <Counter to={m.to} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <p className="mt-3 text-ink-muted">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Numeros
