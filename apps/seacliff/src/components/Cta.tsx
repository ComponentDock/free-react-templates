import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Make Your Stay Extraordinary
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Reserve your escape at Seacliff — ocean views, five-star service, and memories that last
            a lifetime.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="#booking"
              className="bg-accent-500 px-8 py-3 shadow-lg shadow-accent-500/25 hover:bg-accent-600"
            >
              Book Your Stay
            </ButtonLink>
            <ButtonLink
              href="#rooms"
              variant="outline"
              className="border-white/40 px-8 py-3 text-white hover:bg-white/10"
            >
              View Offers
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
