export function Info() {
  return (
    <section className="bg-section-gray py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/zenflow-info/800/500"
              alt="About Zenflow"
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
              We Build Digital Products
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-primary-400 lg:mx-0" />
            <p className="mt-6 text-body leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-primary-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500 lg:self-start"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
