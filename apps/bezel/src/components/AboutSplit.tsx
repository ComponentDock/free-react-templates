export function AboutSplit() {
  return (
    <section className="bg-surface-alt py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src="https://picsum.photos/seed/bezel-about/800/600"
            alt="About our smartwatches"
            className="rounded-xl object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Why Choose Us
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-body md:text-4xl">
            Globally Connected
            <br />
            by Large Network
          </h2>
          <p className="mb-4 text-muted">We are here to listen from you and deliver excellence</p>
          <p className="mb-8 max-w-md text-muted">
            Our global network connects you with the latest innovations in wearable technology. From
            advanced sensors to seamless connectivity, we bring you closer to what matters.
          </p>
          <a
            href="#services"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Get Details
          </a>
        </div>
      </div>
    </section>
  )
}
