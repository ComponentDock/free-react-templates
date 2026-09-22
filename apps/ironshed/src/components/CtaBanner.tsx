import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section
      aria-label="Call to action"
      className="relative bg-cover bg-fixed bg-center py-20 sm:py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/ironshed-cta/1920/600')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Start your Journey with our exciting offers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#classes"
            className="inline-block bg-brand px-10 py-3.5 font-heading text-sm font-semibold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-dark"
          >
            Join With Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
