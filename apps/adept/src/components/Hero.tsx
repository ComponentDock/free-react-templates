import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand py-20 text-white md:py-32">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-brand/80" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="font-display text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl">
              We Do Awesome Things
            </h1>
            <p className="max-w-lg text-lg text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis
              rerum amet natus quas necessitatibus.
            </p>
            <Button
              variant="primary"
              className="rounded bg-accent px-8 py-3 font-semibold uppercase text-white transition-colors hover:bg-accent/90"
            >
              Get Started
            </Button>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/adept-hero/600/400"
              alt="Hero illustration"
              className="w-full rounded-lg shadow-2xl"
              width={600}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
