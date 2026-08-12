import { ArrowRight } from 'lucide-react'
import { pics } from '../data'

export function Hero() {
  return (
    <section id="home" className="bg-cream" aria-label="Banner">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-hero text-5xl leading-none font-black uppercase md:text-7xl">
            <span className="text-brand">Defend &amp;</span>
            <br />
            <span className="text-ink">Dominate</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            They are to sea i waters female from lights. Deep had divided to which had. For it saw
            firmament face whales.
          </p>
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-3.5 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-brand"
            style={{ border: '2px solid transparent' }}
          >
            learn more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <img
          src={pics.hero}
          alt="Basketball school illustration"
          className="w-full rounded-sm object-cover"
          width={720}
          height={640}
        />
      </div>
    </section>
  )
}
