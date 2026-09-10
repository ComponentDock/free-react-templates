import { cta } from '../data'

export function CallToAction() {
  return (
    <section aria-label="Call to action" className="relative py-24">
      <img
        src={cta.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-footer/75" />
      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{cta.heading}</h2>
        <p className="mt-5 text-lg text-white/70">{cta.description}</p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-[3px] border-2 border-white px-10 py-3 text-sm font-medium text-white uppercase transition-colors hover:bg-white hover:text-footer"
        >
          {cta.ctaLabel}
        </a>
      </div>
    </section>
  )
}
