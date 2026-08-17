import { useEffect, useState } from 'react'
import { GALLERY } from '../data'
import { cn } from '@free-react-templates/ui'

/* Gallery — a slider of four distinct images with dot navigation at the
   bottom-center (the source repeats one photo — never ship the filler). */
export function Gallery() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % GALLERY.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="gallery-section" aria-label="Gallery" className="bg-surface px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-edge">
          {GALLERY.map((src, i) => (
            <figure
              key={src}
              aria-hidden={i !== index ? 'true' : undefined}
              className={cn(
                'absolute inset-0 transition-opacity duration-500',
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <img
                src={src}
                alt={`Gallery photo ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {GALLERY.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Go to gallery photo ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-muted/40 hover:bg-muted/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}