export function CTABanner() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:flex-row sm:px-6">
        <div className="sm:w-2/3">
          <h2 className="mb-4 text-3xl font-bold text-white">Have a project on your mind?</h2>
          <p className="mb-6 text-blue-100">
            I am always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Let us create something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
          >
            Contact me
          </a>
        </div>
        <div className="sm:w-1/3">
          <img
            src="https://picsum.photos/seed/palette-cta/400/500"
            alt="Designer portrait"
            className="mx-auto w-full max-w-[250px] rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
