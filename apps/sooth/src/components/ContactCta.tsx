import { Gift } from 'lucide-react'
import { Reveal } from './Reveal'

export function ContactCta() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28 dark:from-primary-800 dark:to-primary-950"
    >
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            <Gift className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="font-heading mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Give the Gift of Relaxation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-100">
            Treat someone special — or yourself — to a Sooth gift card. Redeemable across every
            treatment, package, and product we offer.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-primary-700 transition-colors hover:bg-primary-50"
            >
              Purchase Gift Card
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white"
            >
              Book a Visit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
