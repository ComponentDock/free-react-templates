export function CallToAction() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/loan-cta/1920/500)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Are You Looking For A Loan?</h2>
        <p className="mt-6 text-lg text-white/80">
          Get the financial support you need with our flexible loan options. Apply now and receive a
          decision within 24 hours.
        </p>
        <a
          href="#get-started"
          className="mt-8 inline-block rounded-[2px] bg-primary px-10 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-hover"
        >
          Apply Now
        </a>
      </div>
    </section>
  )
}
