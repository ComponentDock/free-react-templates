export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/eduforge-hero/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-heading/80 to-body/80" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Eduforge Online Training Courses
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Discover thousands of courses taught by expert instructors. Build new skills, advance
            your career, and explore your passions with our comprehensive learning platform.
          </p>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-light transition-colors"
          >
            Get Started!
          </a>
        </div>
      </div>
    </section>
  )
}
