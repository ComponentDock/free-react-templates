export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="bg-white py-20 transition-colors dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/gilded-about/800/600"
            alt="Salon interior"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            The House of Hair Salon & Spa
          </h2>
          <p className="mt-5 leading-relaxed text-mist dark:text-gray-400">
            Working in a salon, you look at trends all day long. You're looking at color all the
            time, what new product is coming out, and how it fits your clients. We combine
            craftsmanship with a warm, welcoming space where every visit feels like a ritual.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            From precision cuts to luxurious color treatments, our stylists treat every strand with
            care — because beautiful hair comes from a legendary.
          </p>
        </div>
      </div>
    </section>
  )
}
