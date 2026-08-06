import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaBand() {
  return (
    <section
      id="cta"
      aria-label="Call to action"
      className="relative overflow-hidden bg-primary-300"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/verve-cta/1600/600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl">
          Turn every channel into a revenue channel and drive business growth
        </h2>
        <div className="mt-9">
          <ButtonLink
            href="#works"
            className="rounded-full bg-gray-900 px-9 py-3.5 font-semibold text-white hover:bg-gray-800"
          >
            View more details
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
