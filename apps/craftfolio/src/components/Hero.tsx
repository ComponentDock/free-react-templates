export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-text-primary flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://picsum.photos/seed/craftfolio-hero/1920/1080')" }}
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4">Alex Morgan</h1>
        <h3 className="font-body text-xl md:text-2xl text-white/80 mb-8">
          Personal Portfolio Website
        </h3>
        <a
          href="#contact"
          className="inline-block bg-brand text-white font-body text-base font-medium px-10 py-3 rounded-full hover:bg-brand-dark transition-colors"
        >
          Hire Me
        </a>
      </div>
    </section>
  )
}
