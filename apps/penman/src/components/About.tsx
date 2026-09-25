export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/penman-about/600/500"
            alt="About the book"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold text-ink">About The Book</h2>
          <p className="mb-6 text-smoke">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <h3 className="mb-2 text-lg font-bold text-ink">Award achievements</h3>
          <p className="mb-4 text-smoke">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics.
          </p>
          <h3 className="mb-2 text-lg font-bold text-ink">Read On Any Devices</h3>
          <p className="mb-4 text-smoke">
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <h3 className="mb-2 text-lg font-bold text-ink">Very High Resolution</h3>
          <p className="text-smoke">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
      </div>
    </section>
  )
}
