export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center py-32 md:py-40"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://picsum.photos/seed/carepoint-hero/1920/800)',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Medicine made with care</h1>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
          Providing quality healthcare services with compassion and expertise. Your well-being is
          our priority.
        </p>
        <a
          href="#appointment"
          className="inline-block bg-brand-green text-white font-semibold uppercase tracking-wider px-8 py-3 rounded hover:bg-brand-dark transition-colors"
        >
          Make an Appointment
        </a>
      </div>
    </section>
  )
}
