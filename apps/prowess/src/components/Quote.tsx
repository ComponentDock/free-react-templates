export function Quote() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/prowess-quote/1600/600"
          alt="Motivational gym background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <blockquote className="text-xl font-light italic leading-relaxed text-white sm:text-2xl lg:text-3xl">
          "The only bad workout is the one that didn't happen."
        </blockquote>
        <cite className="mt-6 block text-sm font-semibold uppercase tracking-[0.2em] text-brand not-italic">
          — Unknown
        </cite>
      </div>
    </section>
  )
}
