import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/crumbs-hero/1920/800')`,
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative watermark */}
      <span className="pointer-events-none absolute left-8 top-8 select-none font-lobster text-[120px] leading-none text-orange-600/10 md:text-[160px]">
        Delicious
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h1 className="font-quicksand text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Delicious Cake For Everyone
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Handcrafted with love using the finest ingredients. Every bite tells a story of passion,
            quality, and sweetness that lingers.
          </p>
          <Button className="mt-8 rounded-full bg-orange-600 px-8 py-3 font-quicksand text-lg font-semibold text-white shadow-lg shadow-orange-600/30 transition-transform hover:scale-105">
            Explore Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
