export function About() {
  return (
    <section id="about" aria-label="About" className="bg-brand-light py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/tadpole-about/600/450"
            alt="Children learning together in a colorful classroom"
            className="w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-brand-pink">About Tadpole</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
            A Place Where Every Child Matters
          </h2>
          <p className="mt-6 leading-relaxed text-gray-600">
            At Tadpole, we believe every child is unique and deserves a learning environment that
            nurtures their individual strengths. Our experienced educators create a warm, welcoming
            space where children feel safe to explore, create, and grow at their own pace.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Founded in 2010, we have helped thousands of young learners build strong foundations for
            lifelong success through our play-based, child-centered approach to early education.
          </p>
          <a
            href="#programs"
            className="btn-pill mt-8 inline-block bg-brand-pink px-8 py-3 text-sm font-bold text-white hover:bg-pink-600 transition-colors"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  )
}
