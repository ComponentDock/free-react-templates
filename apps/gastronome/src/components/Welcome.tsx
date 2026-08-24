export function Welcome() {
  return (
    <section id="about" className="pattern-bg py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-accent text-lg text-brand">Italian Restaurant</p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Welcome</h2>
          <p className="mt-6 leading-relaxed text-white/70">
            Welcome to Gastronome, where we bring you the finest Italian cuisine in a warm and
            inviting atmosphere. Our chefs use only the freshest ingredients to create dishes that
            are both authentic and innovative. Join us for an unforgettable dining experience.
          </p>
          <a
            href="#about"
            className="mt-8 inline-block text-sm font-semibold text-white transition-colors hover:text-brand"
          >
            Our Story →
          </a>
        </div>
        <div className="overflow-hidden rounded-[10px]">
          <img
            src="https://picsum.photos/seed/gastro-welcome/600/400"
            alt="Restaurant interior"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
