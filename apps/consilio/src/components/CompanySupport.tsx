export function CompanySupport() {
  return (
    <section
      aria-labelledby="company-support-heading"
      className="bg-gray-50 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-6xl gap-0 px-4 sm:px-6 md:grid-cols-2">
        <div
          className="flex items-center justify-center bg-accent p-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0 12px, transparent 12px 24px)',
            backgroundColor: '#ff2143',
          }}
        >
          <img
            src="https://picsum.photos/seed/consilio-3/600/500"
            alt="Business consultation meeting"
            className="h-auto w-full max-w-md object-cover shadow-xl"
            loading="lazy"
          />
        </div>
        <div className="bg-navy p-10 sm:p-14">
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            About Our Company
          </p>
          <h2
            id="company-support-heading"
            className="mb-5 font-display text-3xl font-bold text-white"
          >
            We support our clients at every stage of growth
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-300">
            From your first strategy workshop to full-scale transformation, our consultants embed
            with your teams to diagnose, design, and deliver change that lasts.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-gray-300">
            We combine rigorous analysis with hands-on execution so your organization builds the
            capabilities it needs to compete — not just a report that gathers dust.
          </p>
          <a
            href="#about"
            className="inline-flex rounded bg-accent px-9 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
