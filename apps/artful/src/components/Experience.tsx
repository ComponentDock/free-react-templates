export function Experience() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/seed/artful-exp1/400/300"
            alt="Art crafting work 1"
            className="h-48 w-full rounded object-cover"
          />
          <img
            src="https://picsum.photos/seed/artful-exp2/400/300"
            alt="Art crafting work 2"
            className="mt-8 h-48 w-full rounded object-cover"
          />
        </div>

        {/* Text content */}
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-artful-red">
            About Us
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-artful-heading">
            We provide best art experience
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-artful-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mb-6 text-sm leading-relaxed text-artful-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat.
          </p>
          <a
            href="#services"
            className="inline-block rounded-full border border-gray-200 px-8 py-3 text-sm font-medium text-artful-heading transition-colors hover:border-artful-red hover:bg-artful-red hover:text-white"
          >
            View Details
          </a>
        </div>
      </div>
    </section>
  )
}
