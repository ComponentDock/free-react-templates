export function Insights() {
  return (
    <section aria-label="Insights" className="bg-navy-deep">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-medium leading-snug text-white md:text-4xl">
            Insights to help you do what you do better, faster and more profitably.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-on-navy">
            Our engineers turn raw telemetry and industry patterns into practical guidance — so
            every migration, rollout, and redesign starts from a decision backed by data.
          </p>
          <a
            href="#case-study"
            className="mt-8 inline-block border-2 border-white px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-navy-deep"
          >
            Learn More
          </a>
        </div>
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/id/60/1200/900"
            alt="A desk workspace with a keyboard and headset"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
