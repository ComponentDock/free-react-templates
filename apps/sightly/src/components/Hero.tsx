export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/expo-hero/1600/900)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white font-heading md:text-5xl lg:text-6xl">
            Build audience and grow your brand
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gray-200">
            We help businesses grow their online presence and reach new customers through strategic
            digital marketing solutions.
          </p>
          <a
            href="#about"
            className="inline-block rounded bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Explore Us
          </a>
        </div>
        <div className="hidden md:block">
          <img
            src="https://picsum.photos/seed/expo-illustration/600/500"
            alt="Marketing illustration"
            className="mx-auto w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
