import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section id="contact" className="bg-brand py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Join us today without any hesitation
        </h2>
        <ButtonLink
          href="#home"
          className="rounded-none bg-ink px-8 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-black"
        >
          Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </section>
  )
}
