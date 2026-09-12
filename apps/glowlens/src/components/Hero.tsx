import { heroHeading, heroSubtitle } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/glowlens-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-6xl font-bold uppercase tracking-wider">{heroHeading}</h1>
        <p className="text-xl font-light uppercase tracking-wide">{heroSubtitle}</p>
      </div>
    </section>
  )
}
