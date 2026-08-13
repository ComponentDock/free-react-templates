import { ctaBand } from '../data'

export function CtaBand() {
  return (
    <section
      className="relative bg-cover bg-top py-[100px] pb-[78px] text-center"
      style={{ backgroundImage: `url(${ctaBand.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-[1176px] px-4">
        <h2 className="text-5xl font-bold text-white">
          {ctaBand.headingPrefix} <span className="font-black text-brand">{ctaBand.brandWord}</span>{' '}
          {ctaBand.headingSuffix}
        </h2>
        <p className="mb-9 mt-3 text-lg text-muted">{ctaBand.subline}</p>
        <a
          href={ctaBand.cta.href}
          className="inline-block min-w-[257px] rounded-full bg-ink px-9 py-6 text-sm font-semibold uppercase text-white transition-colors hover:bg-graphite"
        >
          {ctaBand.cta.label}
        </a>
      </div>
    </section>
  )
}
