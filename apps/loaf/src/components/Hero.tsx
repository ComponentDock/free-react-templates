import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/loaf-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/50" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-light">
          Love with baking items
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Whenever we bake, bake with our heart
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          Every loaf tells a story. From our ovens to your table, we craft each item with passion
          and the finest ingredients. Taste the difference that love makes.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="rounded-full bg-brand px-8 py-3 text-white hover:bg-brand-dark"
        >
          Check Our Menu
        </Button>
      </div>
    </section>
  )
}
