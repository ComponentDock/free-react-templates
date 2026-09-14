export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-primary-400">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Intercontinental LA Westlake Hotel
          </h2>
          <p className="mt-6 text-body leading-relaxed">
            Haven.com is a leading online accommodation site. We&apos;re passionate about travel.
            Every day, we inspire and reach millions of travelers across 90 local websites in 41
            languages.
          </p>
          <p className="mt-4 text-body leading-relaxed">
            So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest
            house, or tree house, we&apos;ve got you covered.
          </p>
          <a
            href="#rooms"
            className="mt-8 inline-block border-b-2 border-primary-400 text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:text-primary-400"
          >
            Read More
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/seed/haven-about-1/400/300"
            alt="Hotel lobby with elegant decor"
            className="rounded-lg object-cover"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/haven-about-2/400/300"
            alt="Luxury hotel room interior"
            className="mt-8 rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
