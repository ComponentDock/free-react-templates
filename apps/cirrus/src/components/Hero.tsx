export function Hero() {
  return (
    <section className="relative flex min-h-[750px] items-center bg-brand">
      <div className="absolute inset-0 bg-brand opacity-90" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-32 lg:grid-cols-2 lg:px-8">
        {/* Left illustration */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/cirrus-hero/700/600"
            alt="Cloud management illustration"
            className="w-full max-w-[600px] rounded-lg object-cover"
          />
        </div>

        {/* Right text */}
        <div className="text-center lg:text-left">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[2px] text-white/80">
            Cloud Management
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-[1.2] text-white md:text-6xl">
            <span className="block">Cirrus,</span>
            <span className="block">Cloud,</span>
            <span className="block">Management</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-[5px] bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
