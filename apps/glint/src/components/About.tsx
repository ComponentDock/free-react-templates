export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/glint-about/600/450"
            alt="Dental clinic interior"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-ink">
            We Care About Your Teeth
          </h2>
          <p className="mb-6 leading-relaxed text-smoke">
            Our team of experienced dental professionals is dedicated to providing you with the
            highest quality care. Using the latest technology and techniques, we ensure every visit
            is comfortable and effective.
          </p>
          <p className="mb-6 leading-relaxed text-smoke">
            From routine cleanings to complex procedures, we offer a comprehensive range of dental
            services tailored to your needs. Your smile is our passion.
          </p>

          {/* Awards */}
          <img
            src="https://picsum.photos/seed/glint-awards/400/80"
            alt="Awards and certifications"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
