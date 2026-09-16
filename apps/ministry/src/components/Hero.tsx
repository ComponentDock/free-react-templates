export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/ministry-hero/1920/1080')`,
        }}
        role="img"
        aria-label="Church worship background"
      />
      <div className="absolute inset-0 bg-hero-overlay/40" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-3xl text-center px-4">
          <h2 className="text-white text-2xl md:text-3xl font-light mb-2">Transforming Lives</h2>
          <h1 className="text-white text-4xl md:text-5xl font-normal leading-tight mb-6">
            Total Surrender to God
          </h1>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in.
          </p>
          <a
            href="#"
            className="inline-block bg-brand text-white px-8 py-3.5 rounded-full font-normal hover:bg-brand-hover transition-colors"
          >
            Become A Volunteer
          </a>
        </div>
      </div>
    </section>
  )
}
