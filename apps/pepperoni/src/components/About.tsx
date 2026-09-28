export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6">
        <div
          className="h-80 rounded-lg bg-cover bg-center md:h-auto"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/pepperoni-about/800/600)' }}
        />
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-ink">
            Welcome to <span className="text-brand">Pepperoni</span> — A Restaurant
          </h2>
          <p className="mb-4 leading-relaxed text-ink-light">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times and everything that was left from its
            origin would be the word &ldquo;and&rdquo; and the Little Blind Text should turn around
            and return to its own, safe country.
          </p>
          <p className="leading-relaxed text-ink-light">
            But nothing the copy said could convince her and so it didn&apos;t take long until a few
            insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged
            her into their agency, where they abused her for their projects.
          </p>
        </div>
      </div>
    </section>
  )
}
