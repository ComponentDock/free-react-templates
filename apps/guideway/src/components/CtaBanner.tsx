import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/guideway-cta/1600/400)' }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <h2 className="font-heading text-3xl font-bold text-white lg:text-4xl">
          You Always Get the Best Guidance
        </h2>
        <ButtonLink
          href="#contact"
          className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gray-100"
        >
          Request Quote
        </ButtonLink>
      </div>
    </section>
  )
}
