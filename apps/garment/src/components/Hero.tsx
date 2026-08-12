import { ButtonLink } from '@free-react-templates/ui'

const heroImage = 'https://picsum.photos/id/64/1600/600'

export function Hero() {
  return (
    <section
      aria-label="New collection"
      className="relative h-[600px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent dark:from-gray-950/90 dark:via-gray-950/60" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="text-lg uppercase tracking-[0.3em] text-muted dark:text-gray-300">85055</p>
          <h1 className="mt-4 font-display text-6xl font-bold text-ink dark:text-white">
            New Collection
          </h1>
          <ButtonLink
            href="#shop"
            className="mt-10 h-[50px] min-w-[170px] rounded-none bg-brand px-10 text-xs font-medium uppercase tracking-[1.5px] hover:bg-accent"
          >
            View Collection
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
