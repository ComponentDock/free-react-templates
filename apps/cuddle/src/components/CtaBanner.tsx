import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section id="cta-banner" className="py-16 sm:py-20 bg-brand-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl text-ink">
          Do You Care Our Children?
        </h2>
        <div className="mt-8">
          <ButtonLink
            href="#volunteer"
            size="md"
            className="rounded-full bg-brand px-8 uppercase tracking-[0.2em] text-white hover:bg-brand-hover"
          >
            Be A Volunteer
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
