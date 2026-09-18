export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/retreat-hero/1920/800)' }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative text-center text-white z-10">
        <p className="text-brand text-lg tracking-widest uppercase mb-4">Hotel &amp; Resort</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Welcome To Retreat</h1>
        <a
          href="#booking"
          className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-brand hover:border-brand transition-colors"
        >
          Discover Now
        </a>
      </div>
    </section>
  )
}
