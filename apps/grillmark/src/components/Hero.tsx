export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-heading">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/grillmark-hero/1600/900"
          alt="Premium grilled steak on a wooden board"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <span className="font-display text-lg tracking-wider text-white/80">
          Welcome to Grillmark
        </span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Premium cuts, expertly crafted
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Experience the finest steaks, grilled to perfection by our master chefs. Every bite tells
          a story of quality and passion.
        </p>
        <a
          href="#gallery"
          className="mt-8 inline-block rounded-[2px] border-2 border-white bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-[2px] text-white transition-all hover:bg-brand hover:border-brand hover:shadow-lg"
        >
          Explore Menu
        </a>
      </div>
    </section>
  )
}
