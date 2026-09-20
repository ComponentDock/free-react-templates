export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/learnpath-hero/1920/600)',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(21,20,33,.5)' }} />
      <div className="relative z-10 px-4 text-center">
        <h3 className="mb-3 text-sm font-light uppercase tracking-widest text-gray-300">
          Get started with online courses
        </h3>
        <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          best online Learning system
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <a
          href="#courses"
          className="mt-8 inline-block border-2 border-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand hover:text-white"
        >
          read more
        </a>
      </div>
    </section>
  )
}
