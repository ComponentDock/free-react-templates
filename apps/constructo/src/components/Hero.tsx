export function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center bg-gray-800">
      <img
        src="https://picsum.photos/seed/constructo-hero/1600/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        loading="eager"
      />
      <div className="relative z-10 text-center text-white">
        <p className="mb-4 font-sans text-lg text-accent">Welcome to our</p>
        <h1 className="mb-4 font-heading text-3xl font-bold uppercase sm:text-5xl">
          Clean, Modern, Multipurpose Theme
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-gray-200">
          Our team of professionals will help you turn your dream home or project into a reality
          fast. We deliver quality construction services with precision and care.
        </p>
        <a
          href="#about"
          className="inline-block bg-accent px-8 py-3 text-sm font-bold uppercase text-heading transition-colors hover:bg-white"
        >
          Read More
        </a>
      </div>
    </section>
  )
}
