import { brand } from '../data'

/** Full-height hero: photo background with a rgba(0,0,0,0.7) overlay, a
 *  centered light-weight white headline, a supporting line and a ghost pill
 *  "Contact Us" (transparent, white border; hover inverts to white bg +
 *  black text). */
export function Hero() {
  return (
    <section
      id="home"
      data-testid="hero"
      className="relative flex h-[calc(100vh-196px)] min-h-[600px] items-center justify-center bg-cover bg-center md:min-h-[677px]"
      style={{ backgroundImage: "url('https://picsum.photos/id/0/1920/1080')" }}
    >
      <div data-testid="hero-overlay" aria-hidden="true" className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <h1 className="text-5xl font-light leading-none text-white">
          {brand.name} Web Design Agency
        </h1>
        <p className="mx-auto mb-4 mt-6 max-w-xl text-lg text-white">
          We craft clean, fast and beautiful websites for ambitious teams — strategy, design and
          engineering under one roof.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full border-2 border-white bg-transparent px-12 py-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
