export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          className="mb-8 text-3xl font-bold text-charcoal"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          The Restaurant
        </h2>
        <p className="mb-4 text-base leading-relaxed text-body-text">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
        </p>
        <p className="text-base leading-relaxed text-body-text">
          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>
    </section>
  )
}
