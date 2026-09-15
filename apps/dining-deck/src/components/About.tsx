export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/diningdeck-about/600/450"
            alt="DiningDeck restaurant interior"
            className="w-full max-w-md rounded object-cover shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-500">
            About Us
          </p>
          <div className="my-4 h-px w-12 bg-teal-400" />
          <h2 className="text-3xl font-light text-gray-800 md:text-4xl">
            A Place Where <br className="hidden md:block" /> Flavor Meets Ambiance
          </h2>
          <p className="mt-6 leading-relaxed text-gray-500">
            We believe that dining is more than just food — it's an experience. Our chefs craft each
            dish with locally sourced ingredients and a passion for culinary excellence. From the
            freshest seasonal produce to timeless recipes, every plate tells a story.
          </p>
          <a
            href="#reservation"
            className="mt-6 inline-block text-sm font-semibold uppercase tracking-wider text-teal-500 transition-colors hover:text-teal-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
