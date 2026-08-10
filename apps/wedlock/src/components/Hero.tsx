import { Play } from 'lucide-react'
import { Button, ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center justify-center">
      <img
        src="https://picsum.photos/seed/wedlock-1/1920/1080"
        alt="A bride and groom celebrating their wedding day"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-32 text-center text-white sm:px-6">
        <p className="text-sm font-medium tracking-[0.35em] uppercase text-white/80">
          Creative director
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
          We believe that love is a celebration to be cherished, and we are honored to create your
          dream wedding.
        </h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#story"
            className="rounded bg-accent-500 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-700"
          >
            About Us
          </ButtonLink>
          <ButtonLink
            href="#photos"
            className="rounded border-2 border-white/70 bg-transparent px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            View More
          </ButtonLink>
          <Button
            type="button"
            aria-label="Play the wedding film"
            className="rounded-full bg-white/15 px-5 py-3 text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            <Play className="h-5 w-5 fill-current" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
