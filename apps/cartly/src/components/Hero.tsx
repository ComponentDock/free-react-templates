import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative bg-neutral-800 overflow-hidden">
      <img
        src="https://picsum.photos/seed/cartly-hero/1920/790"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        loading="eager"
      />
      <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center px-4 py-20 sm:px-6 lg:min-h-[640px]">
        <div className="text-white">
          <p className="mb-3 font-heading text-sm font-medium uppercase tracking-wider text-white/80">
            Men Collection
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl">
            Show Your <br />
            Personal <span className="text-lime-400">Style</span>
          </h1>
          <p className="mt-4 text-lg font-light text-white/80">
            Fowl saw dry which a above together place.
          </p>
          <Button
            variant="primary"
            className="mt-8 bg-lime-400 text-white uppercase tracking-wider hover:bg-lime-500 border-none"
          >
            View Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
