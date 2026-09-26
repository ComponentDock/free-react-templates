export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">About Me</h2>
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <img
              src="https://picsum.photos/seed/reveal-about/700/500"
              alt="About me"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">We can make it together</h3>
            <p className="mb-4 leading-relaxed text-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-6 leading-relaxed text-muted">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <a
              href="#"
              className="inline-block rounded-full border-2 border-black px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
