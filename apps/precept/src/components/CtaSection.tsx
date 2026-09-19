export function CtaSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center text-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/precept-cta/1920/600')" }}
    >
      <div className="absolute inset-0 bg-navy/30" />
      <div className="relative container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Enhance Your Skills With Best Online Courses
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Every child education is important. Learning is a lifelong process.
        </p>
        <a
          href="#courses"
          className="inline-block bg-brand text-white px-8 py-3 text-sm font-semibold uppercase hover:bg-white hover:text-brand border border-transparent hover:border-brand transition-all"
        >
          Enroll Now
        </a>
      </div>
    </section>
  )
}
