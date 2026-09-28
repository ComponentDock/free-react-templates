import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat py-20 lg:min-h-[700px]"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/supperhouse-hero/1920/1080)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/80">
          Wide Options of Choice
        </p>
        <h1 className="mb-6 text-4xl font-semibold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
          Delicious Recipes
        </h1>
        <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
          Discover a world of flavors crafted by our expert chefs. From appetizers to desserts,
          every dish is prepared with passion and the finest ingredients to bring you an
          unforgettable dining experience.
        </p>
        <ButtonLink
          href="#dishes"
          className="inline-flex items-center rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
        >
          Check Our Menu
        </ButtonLink>
      </div>
    </section>
  )
}
