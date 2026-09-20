export function CtaSection() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/eduforge-cta1/1920/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-heading/80 to-body/80" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start your learning journey today with Eduforge courses
          </h2>
          <p className="text-white/90 mb-6 leading-relaxed">
            Join thousands of students who have transformed their careers through our comprehensive
            online courses and expert-led training programs.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-light transition-colors"
          >
            Get Started!
          </a>
        </div>
      </div>
    </section>
  )
}
