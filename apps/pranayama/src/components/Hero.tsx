import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[80vh] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/pranayama-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Zen
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Discover inner peace through guided yoga sessions designed to balance your body, mind, and
          spirit.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="mt-8 bg-gold text-[#111111] hover:bg-gold/80"
        >
          Explore Classes
        </Button>
      </div>
    </section>
  )
}
