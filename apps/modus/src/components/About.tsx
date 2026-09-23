export function About() {
  return (
    <section id="about" className="bg-paper py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/modus-about/800/600"
              alt="Interior design workspace"
              className="w-full rounded-lg shadow-lg"
            />
            <div
              className="absolute -bottom-6 -left-6 h-32 w-32 rounded-lg bg-brand/20"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              We design with
              <br />
              aesthetic sense
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist dark:text-gray-400">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic. Exercitation photo booth stumptown tote bag Banksy, elit small batch
              freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
              proident chillwave deep v laborum.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded bg-brand px-8 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
