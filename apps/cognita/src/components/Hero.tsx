const heroSlide = {
  image: 'https://picsum.photos/seed/cognita-hero1/1920/600',
  title: 'Best Online Learning System',
  subtitle: 'Start your journey to knowledge today',
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroSlide.image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          {heroSlide.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-200">{heroSlide.subtitle}</p>
        <a
          href="#courses"
          className="mt-8 inline-block rounded-full bg-primary-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-primary-600 hover:shadow-xl"
        >
          Start Learning
        </a>
      </div>
    </section>
  )
}
