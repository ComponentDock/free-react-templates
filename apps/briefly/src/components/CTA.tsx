import { ButtonLink } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[url('https://picsum.photos/seed/briefly-cta/1920/600')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Get to Know Project Estimate?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/80">
          There is a moment in the life of any aspiring astronomer that it is time to buy that first
          telescope. It&apos;s exciting to think about setting up your own viewing station whether
          that is on the deck.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#contact"
            className="inline-block rounded bg-gradient-to-r from-primary-400 to-salmon-400 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:from-primary-500 hover:to-salmon-500"
          >
            Get Free Estimate
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
