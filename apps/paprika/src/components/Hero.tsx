export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/paprika-hero/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 px-4">
        <p className="font-[family-name:var(--font-cursive)] text-3xl md:text-4xl mb-2">
          Welcome To Our
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl mb-4">
          Paprika
        </h1>
        <p className="text-sm md:text-base uppercase tracking-[3px] mb-8 opacity-90">
          A Premium Restaurant Theme
        </p>
        <a
          href="#menu"
          className="inline-block bg-[#b10400] text-white px-8 py-3 text-sm font-semibold uppercase rounded hover:bg-[#8b0300] transition-colors"
        >
          View Menu
        </a>
      </div>
    </section>
  )
}
