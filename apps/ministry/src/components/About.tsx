export function About() {
  return (
    <section id="about" className="py-16 bg-surface">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/seed/ministry-about/600/400"
              alt="Church community gathering"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <span className="text-brand text-sm font-medium uppercase tracking-wider">
              Welcome to Ministry Church
            </span>
            <h2 className="text-3xl font-normal mt-2 mb-6">Connect, Grow and Serve with Us</h2>
            <p className="text-body-text leading-relaxed mb-4">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p className="text-body-text leading-relaxed mb-6">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <a
              href="#"
              className="inline-block bg-brand text-white px-6 py-2.5 rounded-full font-normal hover:bg-brand-hover transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
