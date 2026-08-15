import { ButtonLink } from '@free-react-templates/ui'
import { heroCtaLabel, heroImage, heroLead, heroTitle } from '../data'

export function Hero() {
  return (
    <section
      id="home-section"
      aria-label="Hero"
      className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {/* Dark overlay matching the source's rgba(0,0,0,0.4) video overlay. */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-3xl px-4 py-24 text-center text-white">
        <h1 className="text-4xl font-black uppercase leading-tight md:text-[3rem]">{heroTitle}</h1>
        <p className="mx-auto mt-6 max-w-[700px] text-xl leading-relaxed text-white/90">
          {heroLead}
        </p>
        <ButtonLink
          href="#"
          variant="outline"
          className="mt-10 rounded-none border-2 border-white bg-transparent px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
        >
          {heroCtaLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
