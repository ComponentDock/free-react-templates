import { ArrowRight, FileText } from 'lucide-react'
import { ghostOnGradient, outlineOnGradient } from '../lib/site'

/** The band before the footer: brand gradient, two blurred orbs, a dot grid, and
 * the one ask the whole page has been building towards. */
export function ClosingCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 scroll-mt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-white lg:text-4xl">
          Bring us your three worst courses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          The awkward one, the enormous one, and the one nobody can maintain. We will import them
          and show you honestly what survived.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className={ghostOnGradient}>
            Book a walkthrough
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href="#pricing" className={outlineOnGradient}>
            <FileText aria-hidden="true" className="h-4 w-4" />
            See pricing
          </a>
        </div>
      </div>
    </section>
  )
}
