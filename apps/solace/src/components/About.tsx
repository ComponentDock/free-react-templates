export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Images */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/solace-about1/600/400"
              alt="Cozy hotel room"
              className="rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/solace-about2/300/200"
              alt="Special offer"
              className="absolute -bottom-6 -right-6 rounded-lg border-4 border-white object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              About Us
            </p>
            <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
              Solace A Hotel Booking Agency
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <a
              href="#rooms"
              className="mt-8 inline-block rounded bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Book Your Room Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
