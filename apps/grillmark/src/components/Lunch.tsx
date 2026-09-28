export function Lunch() {
  return (
    <section id="lunch" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://picsum.photos/seed/grillmark-lunch-1/600/400"
              alt="Grilled lunch platter with sides"
              className="rounded shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/grillmark-lunch-2/300/200"
              alt="Fresh salad bowl"
              className="absolute -bottom-8 -right-8 rounded shadow-xl sm:-right-12"
            />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="font-display text-sm tracking-wider text-brand">Lunch</span>
            <h2 className="mt-3 font-display text-3xl text-heading sm:text-4xl dark:text-white">
              Daily Food Courses with Drinks
            </h2>
            <p className="mt-6 leading-relaxed text-body dark:text-gray-400">
              Our lunch menu features the finest cuts of meat, fresh seasonal vegetables, and
              signature sides that make every meal memorable. Each dish is a celebration of flavor
              and quality.
            </p>
            <p className="mt-4 leading-relaxed text-body dark:text-gray-400">
              Pair your meal with our selection of fine wines, craft beers, or artisan cocktails for
              the perfect midday experience.
            </p>

            {/* Chef testimonial */}
            <div className="mt-10 flex items-center gap-4 rounded border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <img
                src="https://picsum.photos/seed/grillmark-chef-avatar/80/80"
                alt="Portrait of Head Chef Walter White"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-lg text-heading dark:text-white">Walter White</p>
                <p className="text-sm text-brand">Head Chef</p>
                <p className="mt-1 text-sm italic text-body dark:text-gray-400">
                  "Every dish is crafted with passion and precision."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
