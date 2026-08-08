import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section aria-label="Call to action" className="bg-brand py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-white">
            Be Part of our Business
          </h2>
          <p className="mt-2 text-white/80">
            Select your services and let us build the space you dream about.
          </p>
        </div>
        <ButtonLink
          href="#contact"
          className="bg-white text-brand hover:bg-paper"
          variant="primary"
        >
          Request A Quote
        </ButtonLink>
      </div>
    </section>
  )
}
