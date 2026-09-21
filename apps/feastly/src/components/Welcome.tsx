export function Welcome() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <img
            src="https://picsum.photos/seed/feastly-welcome/600/500"
            alt="Welcome to Feastly"
            className="w-full rounded object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            <span className="italic text-primary-400">Welcome</span>
            <br />
            to Feastly
          </h2>
          <p className="mt-6 leading-relaxed text-smoke">
            Created to bring the finest culinary experiences to your table. We believe in fresh
            ingredients, bold flavors, and the art of bringing people together over extraordinary
            food.
          </p>
          <p className="mt-4 leading-relaxed text-smoke">
            Every dish tells a story — from farm to table, our chefs craft each meal with passion
            and precision, using recipes passed down through generations and a modern twist that
            keeps things exciting.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded bg-primary-400 px-8 py-3 text-sm font-medium uppercase text-ink transition-all hover:border hover:border-primary-400 hover:bg-transparent"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  )
}
