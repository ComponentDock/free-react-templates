export function About() {
  return (
    <section id="about-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/pulsewave-about/600/400"
              alt="Pulsewave agency team at work"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold text-text-dark">
              Pulsewave A Digital Agency Company
            </h2>
            <p className="mb-6 leading-relaxed text-text-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-8 leading-relaxed text-text-muted">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-accent-blue px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-blue/90"
            >
              More About us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
