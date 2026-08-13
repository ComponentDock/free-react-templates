import { Play } from 'lucide-react'
import { counters } from '../data'

/** Coral #dd6b4d stats band: a video block (photo + circular play button)
 *  pulled up to overlap the section above, and four white counters (15 /
 *  392 / 39332 / 53500) with captions. */
export function Stats() {
  return (
    <section id="about-section" data-testid="stats" className="bg-brand py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <figure className="-mt-40 mb-5" data-testid="video-block">
          <a
            href="https://vimeo.com/45830194"
            target="_blank"
            rel="noreferrer"
            aria-label="Play video"
            className="group relative block overflow-hidden rounded"
          >
            <img
              src="https://picsum.photos/seed/veinly-video/1200/675"
              alt="Inside a modern mine"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-brand transition-transform group-hover:scale-110">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </span>
            </span>
          </a>
        </figure>

        <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter) => (
            <div key={counter.caption} data-testid="counter" className="mb-4">
              <span className="block pb-5 text-4xl font-bold leading-none text-white md:text-[4rem]">
                {counter.value}
              </span>
              <span className="block text-white">{counter.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
