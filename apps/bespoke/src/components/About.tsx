export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Stacked images */}
        <div className="relative mb-8">
          <img
            src="https://picsum.photos/seed/bespoke-about-1/700/500"
            alt="Fashion collection"
            className="w-full rounded-sm object-cover"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/bespoke-about-2/500/350"
            alt="Fashion detail"
            className="absolute -bottom-8 left-4 w-2/3 rounded-sm object-cover shadow-lg md:-bottom-12 md:left-8 md:w-1/2"
            loading="lazy"
          />
        </div>

        <div className="mt-16 md:mt-20">
          <h2 className="font-display text-3xl font-bold text-black md:text-4xl">
            A Fashion Boutique
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-hover"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
