export function About() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 lg:px-8">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/scholara-about/600/450"
            alt="Students in a classroom"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-6 text-3xl font-black uppercase text-ink md:text-4xl">
            A Comprehensive Teaching Approach
          </h2>
          <p className="mb-4 text-mist">
            Our university provides a holistic educational experience that combines rigorous
            academics with hands-on learning. We believe in nurturing critical thinking, creativity,
            and leadership skills in every student.
          </p>
          <p className="mb-6 text-mist">
            With state-of-the-art facilities, world-renowned faculty, and a vibrant campus
            community, we prepare students for success in an ever-evolving global landscape.
          </p>
          <a
            href="#"
            className="inline-block border-b-2 border-brand pb-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
