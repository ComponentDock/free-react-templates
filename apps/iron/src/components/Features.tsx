export function Features() {
  return (
    <section aria-label="Features" className="grid grid-cols-1 md:grid-cols-2">
      {/* Cell 1 — Image */}
      <div className="relative h-72 overflow-hidden md:h-96">
        <img
          src="https://picsum.photos/seed/iron-feat-1/960/600"
          alt="Fitness equipment"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Cell 2 — Text */}
      <div className="flex items-center bg-white px-8 py-12 md:px-16">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink">Basic Revolutions</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary-400">
            Basic &amp; Common Repairs
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-smoke">
            Our foundation is built on the essential movements and exercises that drive real
            results. From the basics of strength training to proper form and technique, we ensure
            every member masters the fundamentals before advancing to more challenging routines.
          </p>
        </div>
      </div>

      {/* Cell 3 — Text */}
      <div className="flex items-center bg-mist px-8 py-12 md:px-16">
        <div>
          <h3 className="font-display text-2xl font-bold text-ink">Personalized Approach</h3>
          <p className="mt-4 text-sm leading-relaxed text-smoke">
            Every body is different. Our experienced trainers assess your fitness level, goals, and
            any limitations to craft a plan that works specifically for you, ensuring safe and
            effective progress at every stage of your journey.
          </p>
        </div>
      </div>

      {/* Cell 4 — Image */}
      <div className="relative h-72 overflow-hidden md:h-96">
        <img
          src="https://picsum.photos/seed/iron-feat-2/960/600"
          alt="Training session"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  )
}
