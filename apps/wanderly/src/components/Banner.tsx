export function Banner() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/wanderly-hero/1920/800')`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feb47b] to-[#ff7e5f] opacity-80" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Wanderly</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto drop-shadow">
          Let&apos;s start your journey with us, your dream will come true
        </p>
        <a
          href="#booking"
          className="inline-block bg-primary-500 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-primary-600 transition-colors"
        >
          Discover Now
        </a>
      </div>
    </section>
  )
}
