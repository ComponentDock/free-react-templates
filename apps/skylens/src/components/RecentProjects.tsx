export function RecentProjects() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/skylens-project/700/500"
              alt="Recent drone photography project"
              className="w-full object-cover"
            />
          </div>
          <div>
            <span className="mb-2 block font-body text-xs font-semibold uppercase tracking-widest text-section-label">
              Portfolio
            </span>
            <h2 className="mb-6 font-sans text-4xl font-bold uppercase text-heading">
              Recent Projects
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Take a look at our latest aerial photography and videography projects. We have worked
              with clients across residential, commercial, and industrial sectors.
            </p>
            <p className="mb-8 text-base leading-relaxed">
              Each project is handled with the same level of professionalism and attention to
              detail, ensuring outstanding results every time.
            </p>
            <a
              href="#services"
              className="inline-block bg-brand px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
