export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/buildwell-hero/1600/600)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
          We Build Your Dream
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-block border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
          >
            Contact Us
          </a>
          <a
            href="#about"
            className="inline-block bg-accent px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-accent-dark"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
