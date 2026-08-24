import { ButtonLink } from '@free-react-templates/ui'

export function Media() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-navy-900">
              Get anything done in one place
            </h2>
            <p className="mb-8 text-lg text-navy-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>
            <ButtonLink
              href="#contact"
              variant="primary"
              className="rounded-full bg-coral-400 px-8 py-3 text-white hover:bg-coral-500"
            >
              Our Services
            </ButtonLink>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/seed/loop-media1/600/400"
              alt="Team collaboration"
              className="w-full rounded-lg"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/loop-media2/300/300"
              alt="Office detail"
              className="absolute -bottom-8 -left-8 w-48 rounded-lg border-4 border-white shadow-lg md:w-56"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
