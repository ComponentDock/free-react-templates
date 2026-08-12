import { Coins } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-medium text-brand md:text-5xl">
            What is Bitcoin
          </h2>
          <h3 className="mt-6 text-lg font-bold text-brand/80">
            Bitcoin is an innovative payment network and a new kind of money.
          </h3>
          <p className="mt-4 leading-relaxed text-muted">
            Bitcoin uses peer-to-peer technology to operate with no central authority or banks;
            managing transactions and the issuing of bitcoins is carried out collectively by the
            network.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Through many of its unique properties, Bitcoin allows exciting uses that could not be
            covered by any previous payment system. It is open-source and designed so that anyone
            can participate.
          </p>
          <ButtonLink
            href="#signup"
            className="mt-8 rounded-full bg-gradient-to-r from-grad-start to-grad-end px-9 py-4 font-display text-base font-medium text-white hover:opacity-90"
          >
            Get Started
          </ButtonLink>
        </div>
        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-full bg-mist">
            <Coins className="h-36 w-36 text-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
