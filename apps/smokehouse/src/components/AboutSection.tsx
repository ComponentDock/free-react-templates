export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/about-restaurant/600/400"
            alt="Restaurant interior"
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold text-heading md:text-4xl">
            Welcome To Smokehouse
            <br />
            Food &amp; Restaurant
          </h2>
          <p className="mb-4 text-text-muted leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mb-8 text-text-muted leading-relaxed">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <a
            href="#menu"
            className="inline-block border-2 border-heading bg-heading px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-heading"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
