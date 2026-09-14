import { Scissors } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/stitchly-hero/1400/700')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-ink/40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
            <Scissors className="h-8 w-8 text-brand animate-spin" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            We make clothes that suit you
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Expert tailoring with a personal touch. From bespoke suits to everyday alterations, we
            bring your vision to life with precision and care.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 inline-flex rounded-none bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
          >
            Our Services
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
