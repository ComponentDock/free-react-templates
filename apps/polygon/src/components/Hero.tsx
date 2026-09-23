import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[700px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://picsum.photos/seed/polygon-hero/1920/1080)`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-8 text-5xl font-light uppercase leading-tight md:text-[50px]">
          Creative Design
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/90">
          We craft modern architectural and interior design solutions that blend functionality with
          stunning aesthetics for every project.
        </p>
        <div className="flex items-center justify-center gap-4">
          <ButtonLink
            href="#about"
            className="border-2 border-white bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
          >
            Get Started
          </ButtonLink>
          <ButtonLink
            href="#projects"
            className="text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-brand-light"
          >
            <ArrowRight className="mr-2 inline h-4 w-4" aria-hidden="true" />
            Download
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
