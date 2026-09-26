import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/reflexly-hero-1/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h1 className="mb-4 font-heading text-5xl font-bold uppercase tracking-wider text-white md:text-6xl">
          Photography Studio
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-white/80">
          Capturing life's most precious moments with artistry and precision. Our team of
          professional photographers delivers stunning visuals that tell your unique story.
        </p>
        <Button className="rounded-btn bg-brand px-8 py-3 font-heading text-sm uppercase tracking-wider text-white hover:bg-brand-hover">
          Contact us
        </Button>
      </div>
    </section>
  )
}
