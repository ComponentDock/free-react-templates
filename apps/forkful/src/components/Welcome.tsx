export function Welcome() {
  return (
    <section id="about" className="bg-paper py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/forkful-welcome/700/500"
            alt="Delicious food on a table"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold italic text-heading sm:text-4xl">
            Welcome to <span className="text-brand">forkful</span>
          </h2>
          <p className="mt-6 leading-relaxed text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 leading-relaxed text-mist">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-heading transition-colors hover:bg-navy hover:text-white"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  )
}
