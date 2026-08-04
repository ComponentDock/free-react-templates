export function Volunteer() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <img
        src="https://picsum.photos/seed/thepetcare-volunteer/1600/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          We looking for helping hand
        </h2>
        <p className="mt-6 text-sm font-light leading-relaxed text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Join us and make a difference for animals in need.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-block rounded-full border border-white/60 px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy3"
          >
            Make a Donation
          </a>
        </div>
      </div>
    </section>
  )
}
