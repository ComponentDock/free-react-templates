export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20" aria-label="About us">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://picsum.photos/seed/focal-about/700/500"
            alt="Photography studio"
            className="w-full rounded-sm object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand">
            About Us
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900">We love photography</h2>
          <p className="mb-4 text-gray-500">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <p className="text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life. One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
      </div>
    </section>
  )
}
