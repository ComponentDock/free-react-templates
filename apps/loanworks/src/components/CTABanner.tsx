export function CTABanner() {
  return (
    <section
      className="relative bg-cover bg-center py-20 lg:py-28"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/loanworks-cta/1600/600)',
      }}
    >
      <div className="absolute inset-0 bg-navy-dark/50" />
      <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
          Apply for a Loan for your startup, education or company
        </h2>
        <a
          href="#hero"
          className="inline-block rounded bg-brand px-8 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
        >
          Apply Now
        </a>
      </div>
    </section>
  )
}
