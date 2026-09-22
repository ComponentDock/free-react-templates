export function CTAIntro() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vitaflow-cta/1920/600)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-2 text-2xl font-bold text-white">
              We Provide Free Health Care Consultation
            </h2>
            <p className="text-base text-white/80">
              Your Health is Our Top Priority with Comprehensive, Affordable Health Services.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded border border-white bg-white px-8 py-3 text-sm font-semibold text-ink no-underline hover:bg-transparent hover:text-white"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
