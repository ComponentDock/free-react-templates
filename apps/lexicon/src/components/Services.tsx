export function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Surrounded by galleries, boutiques, restaurants and cafés
          </h2>
          <a
            href="#rooms"
            className="mt-4 inline-block border-b-2 border-dotted border-brand pb-1 text-brand transition-colors hover:text-brand-dark"
          >
            Find a Room For You
          </a>
        </div>

        {/* Split image-text card */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/lexicon-service/600/450"
              alt="Seasonal specials"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Take Advantage of Our Seasonal Specials
            </h3>
            <p className="mt-4 leading-relaxed text-mist">
              Enjoy exclusive seasonal packages designed to make your stay even more memorable. From
              winter getaways to summer escapes, we have something special for every occasion.
            </p>
            <a
              href="#"
              className="mt-6 inline-block border border-brand px-11 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
