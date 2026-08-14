import { useState } from 'react'
import { Pause, Play, Volume2 } from 'lucide-react'
import { SERMON } from '../data'

export function LatestSermon() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="sermons" aria-label="Latest sermon" className="bg-light py-14 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="relative mb-6 text-3xl font-normal text-ink md:text-4xl">
          {SERMON.heading}
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-1/2 h-0.5 w-24 -translate-x-1/2 bg-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-6 left-1/2 h-0.5 w-20 -translate-x-1/2 bg-accent"
          />
        </h2>
        <p className="mt-8 text-base leading-relaxed text-body">{SERMON.excerpt}</p>

        <h3 className="mt-8 text-xl text-ink">
          <span className="uppercase">{SERMON.subheading}</span>{' '}
          <span className="text-sm italic text-body">by {SERMON.speaker}</span>
        </h3>

        <div
          role="group"
          aria-label="Sermon audio player"
          className="mx-auto mt-8 flex max-w-md items-center gap-4 rounded-full bg-white px-6 py-3 shadow-md"
        >
          <button
            type="button"
            aria-label={playing ? 'Pause sermon audio' : 'Play sermon audio'}
            onClick={() => setPlaying((p) => !p)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
          >
            {playing ? (
              <Pause aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Play aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
          <div
            role="progressbar"
            aria-label="Sermon progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={playing ? 35 : 0}
            className="h-1.5 flex-1 rounded-full bg-light"
          >
            <div
              className="h-full rounded-full bg-primary-600 transition-all"
              style={{ width: playing ? '35%' : '0%' }}
            />
          </div>
          <Volume2 aria-hidden="true" className="h-5 w-5 shrink-0 text-body" />
        </div>
      </div>
    </section>
  )
}
