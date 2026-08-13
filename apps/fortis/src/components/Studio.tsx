import { Play } from 'lucide-react'

/** "See Our Studio" video block: a centered image with a subtle dark veil
 *  and a 70px circular play button (2px white border). The reference links
 *  to a Vimeo embed; the recreation keeps an inert, accessible play
 *  control. */
export function Studio() {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="section-heading text-black">See Our Studio</h2>
        <div className="relative mx-auto max-w-4xl">
          <img
            src="https://picsum.photos/seed/fortis-9/1200/675"
            alt="Inside the Fortis studio"
            className="w-full object-cover"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-black/20" />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-black"
          >
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
