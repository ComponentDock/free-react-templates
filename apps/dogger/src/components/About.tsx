import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-black dark:text-white">About Us</h2>
          <p className="mt-5 text-base font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/dogger-about/640/480"
            alt=""
            loading="lazy"
            className="w-full rounded-lg"
          />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg">
            <Play className="h-7 w-7" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  )
}
