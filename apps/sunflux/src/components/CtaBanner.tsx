import { Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

export function CtaBanner() {
  return (
    <section className="bg-primary-600 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Go Solar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Get a free, no-obligation quote today and find out how much you could save with clean
            energy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href="#contact"
              className="bg-white px-8 py-3.5 text-base font-semibold text-primary-600 shadow-lg hover:bg-gray-100 hover:text-primary-700"
            >
              Get Free Quote
            </ButtonLink>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-primary-100"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call (555) 123-4567
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
