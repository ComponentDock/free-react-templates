import { Phone, Siren } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Emergency() {
  return (
    <section
      aria-label="Emergency care"
      className="bg-primary-900 py-16 lg:py-20 dark:bg-primary-950"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div className="flex flex-col items-center gap-5 sm:flex-row lg:items-start">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-500/20 text-accent-400">
            <Siren className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              24/7 Emergency Care
            </h2>
            <p className="mt-2 max-w-xl text-gray-300">
              Immediate medical attention when you need it most. Call our hotline any time — a
              trained coordinator answers around the clock.
            </p>
            <a
              href="tel:+15559110000"
              className="mt-4 inline-block text-3xl font-extrabold tracking-tight text-white transition-colors hover:text-accent-300"
            >
              (555) 911-0000
            </a>
          </div>
        </div>
        <ButtonLink
          href="tel:+15559110000"
          className="shrink-0 bg-accent-500 px-6 py-3 shadow-lg shadow-accent-500/30 hover:bg-accent-600"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Emergency Line
        </ButtonLink>
      </div>
    </section>
  )
}
