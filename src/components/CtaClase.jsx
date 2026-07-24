import Reveal from './Reveal'
import Button3D from './ui/Button3D'

function CtaClase() {
  return (
    <section className="bg-bg-accent px-6 py-32 text-center md:py-44">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="font-display text-5xl tracking-wide md:text-6xl">
          Ahora es tu turno
        </h2>
        <p className="mt-5 text-lg text-ink-muted">
          Aprende a construir tu propio negocio de Rent to Rent desde cero.
          Sin compromiso: te explico el método paso a paso, tú decides si
          seguir.
        </p>
        <div className="mt-10 flex justify-center">
          <Button3D href="#" label="Accede a la clase gratuita" />
        </div>
      </Reveal>
    </section>
  )
}

export default CtaClase
