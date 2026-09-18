import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-400">
            About Us
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Digital design and development company
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            We craft digital experiences that move businesses forward. From concept to launch, our
            team combines strategy, design, and technology to build products people love.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-8 rounded-full bg-brand-400 text-white hover:bg-brand-500"
          >
            Explore Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="mt-10 lg:mt-0">
          <img
            src="https://picsum.photos/seed/doflo-about/560/400"
            alt="About Doflo digital agency"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
