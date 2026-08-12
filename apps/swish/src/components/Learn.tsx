import { useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { pics } from '../data'

export function Learn() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="learn" className="bg-light py-16 md:py-24" aria-label="Learn about basketball">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 font-display text-sm font-semibold tracking-widest text-muted uppercase">
            free tutorial
          </h4>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Learn About Basketball
          </h2>
          <p className="mt-5 leading-relaxed text-body">
            A created won't created subdue a every green his set which above firmament earth
            firmament. Seed firmament be likeness fruitful to called waters. Given great said
            seasons his midst beast.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Seed firmament be likeness fruitful to called waters. Given great said seasons his midst
            beast.
          </p>
        </div>
        <div className="relative">
          <img
            src={pics.video}
            alt="Basketball training video"
            className="w-full rounded-sm object-cover"
            width={640}
            height={520}
          />
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? 'Pause video' : 'Play video'}
            aria-pressed={playing}
            className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <Play
              className={cn('h-8 w-8 transition-transform', playing && 'scale-110')}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
