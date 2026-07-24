import Reveal from './Reveal'

function RentToRent() {
  return (
    <section className="section-light bg-bg-light px-6 py-32 md:py-44">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-display text-5xl md:text-6xl tracking-wide">
            ¿Qué es el Rent to Rent?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            El Rent to Rent es un modelo de negocio inmobiliario en el que
            alquilas una vivienda al propietario y, con su permiso, la
            subalquilas —normalmente por habitaciones o para estancias
            cortas— <strong className="font-semibold text-ink">generando un margen mensual</strong> sin
            necesidad de <strong className="font-semibold text-ink">comprar la propiedad ni asumir una hipoteca</strong>.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Es una de las formas más accesibles de empezar a{' '}
            <strong className="font-semibold text-ink">generar ingresos recurrentes</strong> en
            el sector inmobiliario, incluso{' '}
            <strong className="font-semibold text-ink">sin capital inicial elevado</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default RentToRent
