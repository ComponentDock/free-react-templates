export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold leading-snug text-charcoal">The River</h2>
          <h3 className="mt-2 text-xl font-semibold text-brand">10 years of excellence</h3>
          <p className="mt-6 leading-relaxed text-gray-500">
            Experience luxury and comfort at our world-class beach resort. Nestled along pristine
            shorelines, The River offers an unforgettable escape from the everyday. Our dedicated
            staff ensures every moment of your stay exceeds expectations.
          </p>
          <p className="mt-4 leading-relaxed text-gray-500">
            From our stunning ocean-view suites to our award-winning dining experiences, every
            detail has been carefully curated to provide the ultimate relaxation experience. Whether
            you're seeking adventure or tranquility, The River has something for everyone.
          </p>
          <p className="mt-4 leading-relaxed text-gray-500">
            Join thousands of satisfied guests who have made The River their home away from home.
            Your perfect getaway awaits.
          </p>
          <a
            href="#rooms"
            className="mt-8 inline-block rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-400"
          >
            LEARN MORE
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/seed/eddy-about-1/400/300"
            alt="Resort exterior view"
            loading="lazy"
            className="rounded-lg object-cover"
          />
          <img
            src="https://picsum.photos/seed/eddy-about-2/400/300"
            alt="Resort lobby"
            loading="lazy"
            className="mt-8 rounded-lg object-cover"
          />
          <img
            src="https://picsum.photos/seed/eddy-about-3/400/300"
            alt="Resort beach"
            loading="lazy"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
