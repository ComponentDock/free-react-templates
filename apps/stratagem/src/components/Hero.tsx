import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[750px] items-center justify-center bg-navy">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/stratagem-hero/1920/750)',
        }}
      />
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-light tracking-wider text-white md:text-6xl">
          Big Opportunity for
          <br />
          your Business
        </h1>
        <p className="mt-6 text-lg text-white/80">
          We help businesses grow with strategic consulting and innovative solutions
        </p>
        <ButtonLink
          href="#services"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#0181f5] to-brand px-8 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
        >
          Our Services
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </section>
  )
}
