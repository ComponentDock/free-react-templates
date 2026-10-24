import { useEffect, useRef, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { gallery } from '../data'

/** Five full-bleed tiles with a wash + zoom glyph on hover, each opening a lightbox. */
export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([])
  const current = active === null ? null : gallery[active]

  useEffect(() => {
    if (active === null) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active])

  return (
    <section id="portfolio" aria-label="Gallery" className="bg-white">
      <ul className="grid grid-cols-2 md:grid-cols-5">
        {gallery.map((item, index) => (
          <li key={item.label} className="group relative">
            <img
              src={`https://picsum.photos/seed/${item.seed}/640/640`}
              alt={item.label}
              className="aspect-square w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30 group-focus-within:bg-ink/30"
            />
            <button
              ref={(node) => {
                triggerRefs.current[index] = node
              }}
              type="button"
              aria-label={`Open ${item.label}`}
              onClick={() => setActive(index)}
              className="absolute inset-0 flex items-center justify-center text-white"
            >
              <ZoomIn
                aria-hidden="true"
                className="size-8 opacity-90 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              />
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.label}
            className="relative w-full max-w-4xl"
          >
            <img
              src={`https://picsum.photos/seed/${current.seed}/1600/1200`}
              alt={current.label}
              className="max-h-[80vh] w-full object-cover"
            />
            <button
              type="button"
              aria-label="Close the image"
              onClick={() => {
                const trigger = triggerRefs.current[active!]
                setActive(null)
                trigger?.focus()
              }}
              className="absolute top-4 right-4 flex size-11 items-center justify-center bg-neon text-ink"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
