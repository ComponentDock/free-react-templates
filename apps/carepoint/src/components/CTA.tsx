export function CTA() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/carepoint-cta/1920/600)',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Need a personal health plan?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Our medical team will create a personalized health plan tailored to your specific needs
          and goals. Take the first step towards better health today.
        </p>
        <a
          href="#appointment"
          className="inline-block bg-brand-green text-white font-semibold uppercase tracking-wider px-8 py-3 rounded hover:bg-brand-dark transition-colors"
        >
          Request a Plan
        </a>
      </div>
    </section>
  )
}
