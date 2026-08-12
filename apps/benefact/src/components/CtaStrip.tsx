import { ButtonLink } from '@free-react-templates/ui'

export function CtaStrip() {
  return (
    <section aria-label="Call to action" className="site-section py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="cta-20101 flex flex-col items-start gap-6 bg-mist p-5 md:flex-row md:items-center md:justify-between md:p-10">
          <h2 className="max-w-2xl font-script text-3xl text-ink md:text-4xl">
            Helping the Homeless, Hungry, and Hurtings Children
          </h2>
          <ButtonLink
            href="#donate"
            className="rounded-none bg-primary px-8 py-4 text-base text-white hover:bg-primary-700"
          >
            Donate Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
