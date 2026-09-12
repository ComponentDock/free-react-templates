import { ArrowRight } from 'lucide-react'

export function HeroSlider() {
  return (
    <section className="relative h-[600px] bg-ink bg-cover bg-center lg:h-[760px]">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-ink/20" />

      {/* Slide content (showing first slide statically) */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-block bg-white px-10 py-12 lg:px-14">
              <p className="mb-4 text-base font-normal text-brand">
                Quality work. Trustable service. Dedicated team
              </p>
              <h1 className="mb-8 text-4xl font-medium leading-tight text-ink md:text-5xl lg:text-[60px] lg:leading-[72px]">
                We provide your Industrial solution
              </h1>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-brand px-10 py-5 text-base font-normal text-white transition-colors hover:bg-brand-dark"
              >
                Our Services
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
