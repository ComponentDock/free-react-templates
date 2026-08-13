import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { screenshots } from '../data'
import { slideIndex } from '../carousel'

/** Lavender "App Screenshots" section: phone-screen images in a simple
 *  carousel with dots. */
export function Screenshots() {
  const [index, setIndex] = useState(0)

  return (
    <section id="gallery" className="bg-lavender px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-medium text-brand-purple lg:text-4xl">App Screenshots</h2>

        <div className="mt-12 flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={() => setIndex((current) => slideIndex(current, screenshots.length, -1))}
            aria-label="Previous screenshot"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-purple transition-colors hover:bg-white sm:flex"
          >
            ‹
          </button>
          <div className="flex h-[420px] w-[240px] items-start justify-center overflow-hidden">
            {screenshots.map((src, shotIndex) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className={cn(
                  'h-[400px] w-[220px] rounded-2xl object-cover shadow-xl transition-opacity duration-300',
                  shotIndex === index ? 'block' : 'hidden',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((current) => slideIndex(current, screenshots.length, 1))}
            aria-label="Next screenshot"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-purple transition-colors hover:bg-white sm:flex"
          >
            ›
          </button>
        </div>

        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Screenshot slides"
        >
          {screenshots.map((src, dotIndex) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show screenshot ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                dotIndex === index ? 'bg-brand' : 'bg-black/20 hover:bg-black/40',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
