import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Creative() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <div className="mt-10 lg:mt-0">
          <img
            src="https://picsum.photos/seed/doflo-creative/600/420"
            alt="Doflo creative team at work"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            We work hard and think creatively
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Our team blends strategic thinking with bold design to solve complex problems and
            deliver results that matter.
          </p>
          <blockquote className="mt-6 border-l-4 border-brand-400 pl-4 italic text-gray-500">
            &ldquo;Creativity is intelligence having fun.&rdquo;
          </blockquote>
          <Button
            variant="primary"
            size="lg"
            className="mt-8 rounded-full bg-brand-400 text-white hover:bg-brand-500"
          >
            See How We Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
