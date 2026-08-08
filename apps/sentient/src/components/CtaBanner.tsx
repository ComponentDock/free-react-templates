import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

export function CtaBanner() {
  return (
    <section id="cta" className="bg-gray-950 px-4 py-20 lg:py-28">
      <Reveal className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 px-8 py-16 text-center shadow-2xl shadow-primary-600/30 lg:px-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          The Future of AI is Here
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-100">
          Join thousands of teams building intelligent applications on Sentient.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#pricing"
            className="bg-white px-6 py-3 text-base text-primary-700 hover:bg-gray-100"
          >
            Start Free
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="border-white/40 px-6 py-3 text-base text-white hover:bg-white/10"
          >
            Talk to Sales
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
