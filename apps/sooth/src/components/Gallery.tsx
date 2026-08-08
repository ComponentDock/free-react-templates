import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Reveal } from './Reveal'

const photos = [
  {
    caption: 'Spa Treatment Room',
    src: 'https://picsum.photos/seed/sooth-gallery-1/800/600',
    ratio: 'aspect-[4/3]',
  },
  {
    caption: 'Relaxation Lounge',
    src: 'https://picsum.photos/seed/sooth-gallery-2/600/800',
    ratio: 'aspect-[3/4]',
  },
  {
    caption: 'Luxury Skincare Products',
    src: 'https://picsum.photos/seed/sooth-gallery-3/800/800',
    ratio: 'aspect-square',
  },
  {
    caption: 'Massage Therapy Suite',
    src: 'https://picsum.photos/seed/sooth-gallery-4/800/600',
    ratio: 'aspect-[4/3]',
  },
  {
    caption: 'Spa Interior Ambiance',
    src: 'https://picsum.photos/seed/sooth-gallery-5/600/800',
    ratio: 'aspect-[3/4]',
  },
  {
    caption: 'Facial Treatment Session',
    src: 'https://picsum.photos/seed/sooth-gallery-6/800/600',
    ratio: 'aspect-[4/3]',
  },
] as const

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  const activePhoto = active === null ? null : photos[active]

  return (
    <section id="gallery" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Gallery
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            A Glimpse of Sooth
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Wander through our serene spaces and the rituals that make them unforgettable.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.caption} delay={index * 60}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block w-full overflow-hidden rounded-2xl"
                aria-label={`View photo: ${photo.caption}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`${photo.ratio} w-full object-cover transition-transform duration-500 group-hover:scale-110`}
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-950/50 to-transparent p-4 text-left text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activePhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-950/90 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close photo"
              className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-4 text-center text-sm font-medium text-gray-200">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
