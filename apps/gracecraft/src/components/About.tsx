export function About() {
  return (
    <section id="about" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">Welcome to our church</h2>
          <p className="mt-3 text-mist">It's the start of an amazing journey of faith</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/gracecraft-about/600/400"
              alt="Church interior"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="leading-relaxed text-body">
              We are a community of believers gathered to worship, learn, and serve together. Our
              mission is to share the love of Christ with everyone we meet, fostering spiritual
              growth and meaningful connections within our congregation and beyond.
            </p>
            <a
              href="#"
              className="mt-8 inline-block w-[160px] rounded-[3px] bg-brand py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Read story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
