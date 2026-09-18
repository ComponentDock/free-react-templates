import { ButtonLink } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section id="contact" aria-label="Call to action" className="bg-gray-900 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href="#contact"
              className="rounded-full bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Contact us
            </ButtonLink>
            <ButtonLink
              href="#"
              className="rounded-full border border-primary-400 bg-transparent px-8 py-3 text-sm font-semibold text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
            >
              Make a demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
