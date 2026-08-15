import { cta } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section
      id="cta"
      aria-label="Join today"
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: `url(${cta.image})` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-4xl font-thin text-white md:text-5xl">{cta.headline}</h1>
        <p className="mt-5 leading-relaxed text-white/80">{cta.copy}</p>
        <ButtonLink
          href="#contact"
          className="mt-10 rounded-none bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-white shadow-[-10px_10px_20px_rgba(0,0,0,0.1)] hover:bg-brand-dark"
        >
          Become a Member
        </ButtonLink>
      </div>
    </section>
  )
}
