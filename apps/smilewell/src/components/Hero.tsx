export function Hero() {
  return (
    <section id="home" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-smoke">
            Welcome To Smilewell
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-brand md:text-5xl">
            We Care For Your Smile
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-smoke">
            We are committed to providing you with the highest quality dental care in a comfortable
            and friendly environment. Our experienced team is here to help you achieve the smile of
            your dreams.
          </p>
          <a
            href="#contact"
            className="inline-block bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
          >
            Contact Us
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/smilewell-hero/600/500"
            alt="Dental care professional smiling"
            className="w-full max-w-md rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
