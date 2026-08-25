export function Trusted() {
  return (
    <section className="grid md:grid-cols-2">
      {/* Image side */}
      <div
        className="h-64 bg-cover bg-center md:h-auto"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/scholara-trusted/800/600)',
        }}
      />

      {/* Text side */}
      <div className="flex flex-col justify-center bg-forest px-8 py-16 md:px-16">
        <h2 className="mb-6 text-3xl font-black uppercase text-white md:text-4xl">
          Trusted by over 6000+ Students
        </h2>
        <p className="mb-4 text-white/80">
          Our university has earned the trust of thousands of students worldwide through our
          commitment to academic excellence and student success. Join a community that values
          knowledge, innovation, and growth.
        </p>
        <p className="mb-8 text-white/80">
          With a proven track record of producing industry leaders and groundbreaking research, we
          continue to set the standard for higher education.
        </p>
        <a
          href="#"
          className="inline-block w-fit border border-white px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-forest"
        >
          Join Now
        </a>
      </div>
    </section>
  )
}
