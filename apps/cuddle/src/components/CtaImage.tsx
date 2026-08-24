import { ButtonLink } from '@free-react-templates/ui'

export function CtaImage() {
  return (
    <section id="cta-image" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
              Support Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-ink">
              The Smallest Act of Kindness is Worth More Than the Grandest Intention
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink
                href="#donate"
                size="md"
                className="rounded-full bg-brand px-8 uppercase tracking-[0.2em] text-white hover:bg-brand-hover"
              >
                Donate Now
              </ButtonLink>
              <ButtonLink
                href="#volunteer"
                size="md"
                variant="outline"
                className="rounded-full border-2 border-brand px-8 uppercase tracking-[0.2em] text-brand hover:bg-brand hover:text-white"
              >
                Become A Volunteer
              </ButtonLink>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/cuddle-cta/800/600"
              alt="Volunteers helping community"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
