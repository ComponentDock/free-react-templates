export function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/fitcore-testimonial/600/500"
            alt="Gym interior"
            className="w-full"
            loading="lazy"
          />
          <div
            className="absolute -bottom-8 -right-8 hidden text-8xl font-bold text-brand/30 sm:block"
            aria-hidden="true"
          >
            &ldquo;
          </div>
        </div>
        <div className="md:pl-12">
          <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
            Client Feedback
          </span>
          <h2 className="mb-10 font-display text-4xl font-bold uppercase text-ink md:text-5xl">
            What Our Clients Think About Our Gym
          </h2>
          <blockquote className="mb-8 border-l-4 border-brand pl-6">
            <p className="mb-6 text-lg leading-relaxed text-muted">
              The training programs here transformed my approach to fitness. The coaches are
              knowledgeable, supportive, and genuinely invested in your progress. I have never felt
              stronger or more confident.
            </p>
            <footer>
              <cite className="not-italic">
                <span className="block font-display text-xl font-bold text-ink">Alex Morgan</span>
                <span className="text-sm text-brand">Gym Member</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
