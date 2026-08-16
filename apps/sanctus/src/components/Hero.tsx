import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/sanctus-hero-bg/1920/1280')" }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-2">
        <div>
          <span className="mb-8 block text-xs font-bold uppercase tracking-[0.1em] text-white">
            {hero.subheading}
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[40px]">
            {hero.headline}
          </h1>
          <p className="mb-10 mt-6 max-w-xl text-white">{hero.paragraph}</p>
          <ButtonLink
            href="#sermons"
            className="rounded-[30px] border-2 border-transparent bg-brand px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white hover:border-transparent hover:bg-white hover:text-brand hover:shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
          >
            {hero.ctaLabel}
          </ButtonLink>
        </div>
        <div className="relative">
          <img src={hero.image} alt={hero.imageAlt} className="w-full rounded-lg object-cover" />
          <button
            type="button"
            aria-label={hero.playLabel}
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Play className="ml-1 h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
