import { Button } from '@free-react-templates/ui'

/**
 * 2-column about section: image left, bio text right with "See More Works" CTA.
 * Image from picsum.photos placeholder.
 */
export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/folio-about/600/700"
            alt="Author portrait"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="mb-6 font-heading text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            A Writer &amp; Author of the Book
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <Button variant="primary" className="rounded-full px-8 py-3">
            See More Works
          </Button>
        </div>
      </div>
    </section>
  )
}
