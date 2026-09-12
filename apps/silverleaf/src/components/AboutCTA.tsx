export function AboutCTA() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: illustration */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/silverleaf-cta/500/400"
              alt="Senior care illustration"
              className="max-w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: text */}
          <div className="text-white">
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Senior &amp; Elder Home Care Center
            </h2>
            <p className="mb-6 leading-relaxed text-white/80">
              Our dedicated team provides personalized care plans for every resident. From medical
              support to daily activities, we ensure your loved ones receive the best possible care
              in a warm and welcoming environment.
            </p>
            <blockquote className="mb-8 border-l-4 border-white/40 pl-4 font-display italic text-white/90">
              &ldquo;We care for elderly people&rdquo;
            </blockquote>
            <a
              href="#"
              className="inline-block rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
