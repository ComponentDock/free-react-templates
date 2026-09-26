export function About() {
  return (
    <section className="bg-white py-20" id="about" data-testid="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Image thumbnails */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded">
              <img
                src="https://picsum.photos/seed/vizier-about1/400/500"
                alt="Agency portrait 1"
                className="h-[300px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded">
              <img
                src="https://picsum.photos/seed/vizier-about2/400/500"
                alt="Agency portrait 2"
                className="h-[300px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center md:col-span-2">
            <h2 className="mb-6 text-3xl font-bold text-heading md:text-4xl">
              We Have 20+ Years Practical Experience in Agency
            </h2>
            <p className="mb-4 leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
            </p>
            <p className="leading-relaxed text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
