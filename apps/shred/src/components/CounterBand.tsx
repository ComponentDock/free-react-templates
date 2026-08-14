/* Counter band — full-width background image with a dark overlay, the
   "We're Functioning for Almost 40 Years" heading (coral number) and two
   paragraphs of about copy. */
export function CounterBand() {
  return (
    <section
      id="about-section"
      aria-label="About the club"
      className="relative overflow-hidden py-28"
    >
      <img
        src="https://picsum.photos/seed/shred-divider/1600/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
          A Few Words About Us
        </span>
        <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-4xl">
          We're Functioning for Almost <span className="text-brand">40</span> Years
        </h2>
        <p className="mt-6 leading-relaxed text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
        </p>
        <p className="mt-4 leading-relaxed text-white/80">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </p>
      </div>
    </section>
  )
}
