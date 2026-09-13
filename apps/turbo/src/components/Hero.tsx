export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/turbo-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-primary-900/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Welcome</h1>
        <p className="mb-8 max-w-xl text-lg text-white/90">
          We build innovative digital solutions that transform businesses. Let us help you take your
          company to the next level.
        </p>
        <a
          href="#contact"
          className="inline-block rounded bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}
