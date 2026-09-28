export function Breakfast() {
  return (
    <section id="breakfast" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text side */}
          <div>
            <span className="font-display text-sm tracking-wider text-brand">Breakfast</span>
            <h2 className="mt-3 font-display text-3xl text-heading sm:text-4xl dark:text-white">
              Daily Food Courses with Drinks
            </h2>
            <p className="mt-6 leading-relaxed text-body dark:text-gray-400">
              Start your morning with our carefully curated breakfast menu. From farm-fresh eggs to
              artisan pastries, every dish is prepared with the finest ingredients to fuel your day.
            </p>
            <p className="mt-4 leading-relaxed text-body dark:text-gray-400">
              Our chefs combine traditional recipes with modern techniques, creating a breakfast
              experience that is both comforting and extraordinary.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-medium uppercase tracking-wide text-heading dark:text-white">
                  Opening Hours
                </dt>
                <dd className="mt-2 text-sm text-body dark:text-gray-400">7:00 AM — 11:00 AM</dd>
              </div>
              <div>
                <dt className="text-sm font-medium uppercase tracking-wide text-heading dark:text-white">
                  Location
                </dt>
                <dd className="mt-2 text-sm text-body dark:text-gray-400">123 Grill Street, NY</dd>
              </div>
            </dl>
          </div>

          {/* Image side */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/grillmark-breakfast-1/600/400"
              alt="Assorted breakfast dishes on a table"
              className="rounded shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/grillmark-breakfast-2/300/200"
              alt="Freshly brewed coffee and pastries"
              className="absolute -bottom-8 -left-8 rounded shadow-xl sm:-left-12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
