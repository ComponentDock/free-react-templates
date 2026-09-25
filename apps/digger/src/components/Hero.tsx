const slides = [
  {
    title: 'Welcome to Digger',
    subtitle:
      'We build the foundation of your dreams with expert construction and mining services.',
  },
  {
    title: 'Expert Mining Solutions',
    subtitle: 'Leading the industry with innovative surface mining and land development.',
  },
] as const

export function Hero() {
  const current = slides[0]!

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[500px] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/digger-hero/1920/600')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">{current.title}</h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">{current.subtitle}</p>
        <a
          href="#contact"
          className="inline-block border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-heading transition-colors rounded"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
