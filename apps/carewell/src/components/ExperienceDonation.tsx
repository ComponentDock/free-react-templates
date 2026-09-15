export function ExperienceDonation() {
  return (
    <section className="relative flex min-h-[400px] items-center bg-text-primary md:min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/carewell-experience/1920/600)',
        }}
      />
      <div className="absolute inset-0 bg-black/42" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="mb-4 text-2xl font-bold uppercase tracking-wider text-white md:text-3xl">
          Experience How Your
          <br />
          Donation Can Reach
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/90">
          The French Revolution constituted for the conscience of the dominant aristocratic class a
          fall from innocence the natural chain of events.
        </p>
        <a
          href="#donate"
          className="inline-block bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          Make Donation Now
        </a>
      </div>
    </section>
  )
}
