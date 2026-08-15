export function WelcomeIntro() {
  return (
    <section id="about" aria-label="Welcome" className="bg-white py-24">
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
          Welcome To Our Website
        </h2>
        <p className="mt-6 font-body text-lg font-light leading-relaxed text-body">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics.
        </p>
        <p className="mt-4 font-body text-lg font-light leading-relaxed text-body">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </p>
        <a
          href="#services"
          className="mt-10 inline-block bg-brand px-10 py-4 font-heading text-sm font-bold uppercase tracking-[0.2rem] text-white transition-colors hover:bg-brand/90"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
