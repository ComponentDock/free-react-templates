export function About() {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-heading">Choose A Perfect Car</h2>
            <p className="mb-4 text-body">
              We provide the best car rental experience with a wide selection of well-maintained
              vehicles. Whether you need a car for business or pleasure, we have the right vehicle
              for you.
            </p>
            <p className="mb-6 text-body">
              Our commitment to quality service and competitive pricing makes us the preferred
              choice for thousands of satisfied customers.
            </p>
            <a
              href="#fleet"
              className="inline-block bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              View Fleet
            </a>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/highway-about/600/400"
              alt="Choose a perfect car"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
