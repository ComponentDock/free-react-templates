export function DiningBar() {
  return (
    <section className="relative flex min-h-[350px] items-center justify-center bg-bg-dark">
      <img
        src="https://picsum.photos/seed/regalia-dining/1600/400"
        alt="Fine dining restaurant"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative z-10 max-w-2xl px-4 text-center text-white">
        <h2 className="mb-4 font-heading text-4xl font-semibold">Fine Dining Experience</h2>
        <p className="mb-6 text-gray-200">
          Indulge in culinary excellence at our signature restaurant, where locally sourced
          ingredients meet world-class culinary artistry.
        </p>
        <a
          href="#"
          className="inline-block rounded border border-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-white hover:text-bg-dark"
        >
          View Menu
        </a>
      </div>
    </section>
  )
}
