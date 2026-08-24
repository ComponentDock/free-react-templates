import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Explore All Corners of The World With Us
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
            >
              Read more
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://picsum.photos/seed/voyage-about1/400/300"
              alt="Travel experience"
              className="rounded-lg object-cover shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/voyage-about2/400/300"
              alt="Beautiful destination"
              className="mt-8 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
