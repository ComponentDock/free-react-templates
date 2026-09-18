export function AboutSection() {
  return (
    <section data-testid="about-section" className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand text-sm font-normal uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-heading text-4xl lg:text-5xl font-normal mt-3 mb-6 leading-tight">
              A Luxurious Hotel with Nature
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Nestled among pristine mountains and lush forests, Highland Resort offers an
              unparalleled escape from the ordinary. Our carefully curated spaces blend modern
              luxury with natural beauty, creating a sanctuary where every moment becomes a
              cherished memory.
            </p>
            <a
              href="#about"
              className="inline-block text-muted font-medium hover:text-brand transition-colors border-b border-muted hover:border-brand pb-1"
            >
              Learn More
            </a>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/seed/highland-about-1/500/600"
              alt="Hotel lobby"
              className="w-full rounded shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/highland-about-2/400/500"
              alt="Hotel room"
              className="absolute -bottom-8 -left-8 w-2/3 rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
