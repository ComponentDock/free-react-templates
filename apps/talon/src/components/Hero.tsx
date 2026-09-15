import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/talon-hero/1600/800)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:py-44">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Do you need <span className="font-extrabold">a modern</span> website?
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec
            elementum id, suscipit id nulla.
          </p>
          <ButtonLink
            href="#services"
            className="mt-10 inline-flex items-center gap-2 rounded bg-primary-400 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-500"
          >
            Discover
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
