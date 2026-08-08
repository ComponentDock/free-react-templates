import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

export function CtaBanner() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-4 py-20 lg:py-28"
    >
      {/* Glow orbs */}
      <div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to transform your workflow?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
          Join thousands of teams already using Zenith to build better products, faster.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#pricing"
            className="bg-white px-6 py-3 text-base text-primary-700 hover:bg-gray-100"
          >
            Start free trial
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="border-white/40 px-6 py-3 text-base text-white hover:bg-white/10"
          >
            Contact sales
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
