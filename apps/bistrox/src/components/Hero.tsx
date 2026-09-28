export function Hero() {
  return (
    <section
      id="home"
      data-testid="hero"
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/bistrox-hero/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-gray-300 uppercase tracking-widest text-sm mb-4">Bistrox Restaurant</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
          Book a table for yourself at a time convenient for you
        </h1>
        <p className="text-xl text-gray-300 mb-8 font-heading">Tasty & Delicious Food</p>
        <a
          href="#reservation"
          className="inline-block bg-brand hover:bg-brand-hover text-white font-semibold py-3 px-8 rounded transition-colors"
        >
          Book a table
        </a>
      </div>
    </section>
  )
}
