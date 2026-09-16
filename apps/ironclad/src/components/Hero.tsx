export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/ironclad-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            We Build
            <br />
            Great Projects
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="bg-brand-400 hover:bg-brand-500 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-6 py-3 rounded font-medium transition-colors"
            >
              Request A Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
