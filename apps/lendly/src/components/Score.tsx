import { score } from '../data'

export function Score() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${score.image})` }}
      id="contact"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-[1176px] px-4 py-[103px]">
        <h2 className="mb-4 text-5xl font-bold leading-tight text-white lg:text-[60px]">
          {score.heading}
        </h2>
        <p className="mb-12 max-w-xl text-xl leading-relaxed text-white lg:text-2xl">
          {score.subline}
        </p>
        <a
          href={score.cta.href}
          className="inline-block min-w-[257px] rounded-full bg-brand px-9 py-6 text-center text-sm font-semibold text-white transition-colors hover:bg-brand/90"
        >
          {score.cta.label}
        </a>
      </div>
    </section>
  )
}
