import { ButtonLink } from '@free-react-templates/ui'
import { introCta } from '../data'

export function IntroCta() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/mortar-intro/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {introCta.kicker}
        </span>
        <h2 className="mt-2 text-3xl font-medium text-white md:text-5xl">{introCta.heading}</h2>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-[4px] border-2 border-white bg-white px-10 py-4 text-base font-medium text-charcoal hover:bg-transparent hover:text-white"
        >
          {introCta.ctaLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
