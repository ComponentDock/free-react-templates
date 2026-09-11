export function Hero() {
  return (
    <section
      id="home-section"
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: "url('https://picsum.photos/seed/dictum-hero/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          We Are The Best Consulting Agency
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact-section"
            className="bg-primary-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-400 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
