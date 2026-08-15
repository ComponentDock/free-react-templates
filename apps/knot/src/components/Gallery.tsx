import { useEffect, useState } from 'react'
import { Flower2, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  galleryCloseLabel,
  galleryDialogLabel,
  galleryOpenLabel,
  galleryPhotos,
  galleryTitle,
  type GalleryPhoto,
} from '../data'

const spanClass: Record<GalleryPhoto['span'], string> = {
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const photo = active === null ? null : galleryPhotos[active]

  return (
    <section id="gallery-section" className="py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Flower2 aria-hidden="true" className="mx-auto h-6 w-6 text-brand" />
        <h2 className="mt-5 text-4xl font-normal uppercase text-ink">{galleryTitle}</h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-12 px-4">
        {galleryPhotos.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-label={`${galleryOpenLabel} ${index + 1}`}
            onClick={() => setActive(index)}
            className={cn(
              'col-span-12 h-[410px] overflow-hidden p-1 md:col-span-6',
              spanClass[item.span],
            )}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {photo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={galleryDialogLabel}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
        >
          <button
            type="button"
            aria-label={galleryCloseLabel}
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>
          <img src={photo.src} alt={photo.alt} className="max-h-[85vh] max-w-full object-contain" />
        </div>
      )}
    </section>
  )
}
