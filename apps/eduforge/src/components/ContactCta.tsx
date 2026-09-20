export function ContactCta() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/eduforge-cta2/1920/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-heading/80 to-body/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto leading-relaxed">
          Have questions about our courses or need guidance on your learning path? Our team is here
          to help you get started.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-light transition-colors"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  )
}
