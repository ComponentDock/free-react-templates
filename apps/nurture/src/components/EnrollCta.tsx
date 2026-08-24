export function EnrollCta() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed bg-no-repeat py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/nurture-cta2/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative z-10 px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Enroll Your Kids This Summer to get 30% off
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          Give your child the gift of quality education. Limited spots available for our summer
          programs.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-tangerine px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-tangerine-dark"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
