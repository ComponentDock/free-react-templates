export function About() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="flex-1">
          <h2 className="font-display text-3xl font-bold uppercase text-heading">
            Welcome To Our Best Fitness Club
          </h2>
          <p className="mt-6 leading-relaxed text-body-text">
            Our gym is more than just a place to work out — it&apos;s a community dedicated to
            helping you achieve your fitness goals. With state-of-the-art equipment and expert
            trainers, we provide everything you need to transform your body and mind.
          </p>
          <p className="mt-4 leading-relaxed text-body-text">
            Whether you&apos;re a beginner or an experienced athlete, our programs are designed to
            challenge and inspire you every step of the way.
          </p>
          <a
            href="#schedule"
            className="mt-6 inline-block rounded bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </a>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/bodyforge-about/600/500"
            alt="Fitness club interior"
            className="w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  )
}
