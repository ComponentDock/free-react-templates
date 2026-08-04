export function About() {
  return (
    <section id="about" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-black dark:text-white">
            Let Us Tell You Our Story
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <a
            href="#farm-to-table"
            className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Read More
          </a>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/farmie-about/640/480"
            alt=""
            loading="lazy"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
