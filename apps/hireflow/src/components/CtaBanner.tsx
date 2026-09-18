export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-light to-brand py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Join us today without any hesitation
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/90">
          Find your dream job or hire the perfect candidate. Our platform connects talented
          professionals with top companies worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-gray-100"
          >
            I am a Candidate
          </a>
          <a
            href="#"
            className="rounded border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
          >
            Request Free Demo
          </a>
        </div>
      </div>
    </section>
  )
}
