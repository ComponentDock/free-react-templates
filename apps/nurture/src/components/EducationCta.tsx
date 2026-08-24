export function EducationCta() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed bg-no-repeat py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/nurture-cta1/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-brand/80" />
      <div className="relative z-10 px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Education for Tomorrow&apos;s Leaders
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          Building a strong foundation for your child&apos;s future through innovative teaching
          methods and caring educators.
        </p>
        <a
          href="#about"
          className="inline-block rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-brand"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
