export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center bg-ink">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/fabricate-hero/1920/1080)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest mb-4 text-brand font-medium">
          Don&apos;t look further, here is the key
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          We&apos;re Industrial Solution
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Delivering world-class industrial services and engineering solutions. We bring innovation,
          quality, and reliability to every project we undertake.
        </p>
        <a
          href="#about"
          className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-full uppercase text-sm tracking-wider transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
