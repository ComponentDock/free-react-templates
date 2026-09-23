export function Quote() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 md:flex md:items-center md:gap-12">
        <blockquote className="mb-8 md:mb-0 md:w-1/2">
          <p className="text-2xl font-[family-name:var(--font-playfair)] italic leading-relaxed text-navy md:text-3xl">
            "Music gives soul to the universe, wings to the mind, flight to the imagination, and
            life to everything."
          </p>
          <cite className="mt-4 block text-sm text-muted">— Plato</cite>
        </blockquote>
        <div className="md:w-1/2">
          <p className="leading-relaxed text-muted">
            Art has the power to transform how we see the world. Our museum curates exhibitions that
            bridge the gap between classical masterworks and contemporary innovation, creating
            experiences that inspire wonder and reflection in every visitor.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            From interactive installations to timeless sculptures, each exhibit is thoughtfully
            designed to engage audiences of all ages and backgrounds.
          </p>
        </div>
      </div>
    </section>
  )
}
