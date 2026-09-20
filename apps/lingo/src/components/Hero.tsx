export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-dark-bg text-white py-32 md:py-48"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/lingo-hero/1920/800)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Learn Languages Easily
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Master a new language with expert instructors and interactive courses designed for every
          level.
        </p>
        <a
          href="#courses"
          className="inline-block bg-brand-primary text-white px-9 py-3.5 rounded-[3px] text-sm font-bold uppercase tracking-wide hover:bg-brand-primary/90 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
