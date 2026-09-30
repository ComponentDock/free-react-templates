import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import { highlightCards } from '../data'

const VISIBLE = 3

/** HighlightsBand: brand-red parallax band with a video popup and a
 *  carousel of dated highlight cards (white text box + red accent bar). */
export function HighlightsBand() {
  const [start, setStart] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)
  const visible = highlightCards.slice(start, start + VISIBLE)
  const maxStart = highlightCards.length - VISIBLE

  return (
    <section
      id="highlights"
      className="relative bg-cover bg-fixed bg-center py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/sideline-highlights-bg/1920/900)',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(242,58,46,0.9)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">More Game Highlights</h2>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Play video"
            className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-brand"
          >
            <Play className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {visible.map((card) => (
            <article key={card.title} className="relative">
              <div className="relative h-64 overflow-hidden">
                <img src={card.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-xs font-light uppercase tracking-[0.2em] text-white">
                    {card.date}
                  </span>
                </div>
              </div>
              <div className="relative z-10 -mt-10 mx-4 bg-white p-6 shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]">
                <div className="mb-3 h-1 w-20 bg-brand" aria-hidden="true" />
                <h3 className="text-xl font-bold text-black">
                  <a href="#news" className="transition-colors hover:text-brand">
                    {card.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-ink">{card.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={start === 0}
            aria-label="Previous highlights"
            className="flex h-11 w-11 items-center justify-center border-2 border-white text-white transition-opacity disabled:opacity-20"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
            disabled={start === maxStart}
            aria-label="Next highlights"
            className="flex h-11 w-11 items-center justify-center border-2 border-white text-white transition-opacity disabled:opacity-20"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Game highlights video"
            className="relative w-full max-w-3xl bg-black p-2"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex aspect-video items-center justify-center bg-[#111] text-white">
              <Play className="h-16 w-16" aria-hidden="true" />
              <span className="sr-only">Video player placeholder</span>
            </div>
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 text-white"
            >
              <X className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
