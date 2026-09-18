export function Hero() {
  return (
    <section
      className="relative min-h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sweeply-hero/1600/900)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl px-4 py-32 flex items-center min-h-[500px]">
        <div className="max-w-xl text-white">
          <span className="inline-block text-sm font-bold tracking-wider uppercase mb-4 text-accent">
            Introducing Sweeply
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            A Clean Home is A Happy Home
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <a
            href="#quote"
            className="inline-block bg-brand text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors"
          >
            Request A Quote
          </a>
        </div>
      </div>
    </section>
  )
}
