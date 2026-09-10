import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="bg-body-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <img
            src="https://picsum.photos/seed/lightwell-1/600/400"
            alt="Lightwell hero illustration"
            className="h-auto w-full rounded-lg object-cover shadow-lg"
            width={600}
            height={400}
          />
        </div>

        <div className="order-1 space-y-6 md:order-2">
          <h1 className="text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-5xl">
            Behind Every Success There is a Cactus
          </h1>
          <p className="text-base leading-relaxed text-ink">
            We help you build something extraordinary. Our consulting team brings strategy,
            creativity, and technology together to drive real results for your business.
          </p>
          <ButtonLink
            href="#about"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-medium"
          >
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
