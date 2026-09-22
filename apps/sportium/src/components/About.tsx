export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-400">
              welcome to sportium
            </p>
            <h2 className="mb-6 text-3xl font-bold text-heading md:text-4xl">
              About <span className="text-brand-400">Sportium</span>
            </h2>
            <p className="mb-4 text-base font-medium text-heading">
              Etiam commodo justo nec aliquam feugiat. Donec a leo eget eget augue porttitor
              sollicitudin augue porttitor sollicitudin.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-body">
              Morbi sed varius risus, vitae molestie lectus. Donec id hendrerit velit, eu fringilla
              neque. Etiam id finibus sapien. Donec sollicitudin luctus ex non pharetra. Aenean
              lobortis ut leo vel porta. Maecenas ac vestibulum lectus.
            </p>
            <a
              href="#footer"
              className="inline-block rounded-full bg-brand-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Join Now
            </a>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/sportium-about/600/500"
              alt="About Sportium — trainer working with client"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
