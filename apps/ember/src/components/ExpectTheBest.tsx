import { Play } from 'lucide-react'

export function ExpectTheBest() {
  return (
    <section id="video" className="relative overflow-hidden bg-ink py-24 dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/ember-video/1600/900"
          alt="Chef preparing a dish"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Expect The Best</h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/70">
          Experience the finest culinary artistry with ingredients sourced from local farms, crafted
          by our award-winning chefs.
        </p>
        <a
          href="https://www.youtube.com/watch?v=pBFQdxA-apI"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play restaurant story video"
          className="mt-10 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand bg-brand/20 text-white transition-colors hover:bg-brand"
        >
          <Play className="h-8 w-8" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
