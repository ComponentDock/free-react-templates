import { PHOTOS, SPAN_CLASS } from '../data'

/* main.main-content — masonry photo grid: 19 cards on a 12-column grid
   with mixed lg spans (3/4/6/8), half-width on mobile. Each card shows a
   cover-cropped image with a centered "Photos Title Here" / "42 Photos"
   overlay that fades in over a rgba(0,0,0,0.6) veil on hover. */
export function PhotoGrid() {
  return (
    <section aria-label="Photo gallery" className="px-[15px] pt-[15px] md:pt-0">
      <div className="grid grid-cols-12 items-stretch gap-x-6">
        {PHOTOS.map((photo) => (
          <a
            key={photo.id}
            href="#"
            className={['group relative col-span-6 block', SPAN_CLASS[photo.span]].join(' ')}
          >
            <img
              src={photo.src}
              alt={`Photo ${photo.id}`}
              loading="lazy"
              className="mb-6 h-[200px] w-full object-cover md:h-[320px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h3 className="text-base font-medium text-white">Photos Title Here</h3>
              <span className="mt-1 block text-xs uppercase tracking-wide text-meta">
                42 Photos
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
