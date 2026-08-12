import { useState } from 'react'
import { Pause, Play, Volume2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'
import { allTracksUrl, tracks } from '../data'

// "Latest tracks" — static audio-player rows (no audio assets; the play
// button toggles play/pause state) plus a right-aligned outline button.
export function Tracks() {
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section id="tracks" className="bg-paper py-[100px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle title="Latest tracks" watermark="Music podcast" />
          <a
            href={allTracksUrl}
            target="_blank"
            rel="noreferrer"
            className="mb-10 inline-flex border-2 border-brand bg-transparent px-[25px] py-[14px] text-[15px] font-semibold uppercase tracking-[2px] text-ink transition hover:bg-brand hover:text-white"
          >
            View all tracks
          </a>
        </div>

        <div className="mb-[120px] max-h-[502px] overflow-y-auto">
          {tracks.map((track, index) => {
            const isPlaying = playing === index
            return (
              <div
                key={track.title}
                className="flex items-center gap-6 border-b border-[#e1e1e1] py-7"
              >
                <button
                  type="button"
                  onClick={() => setPlaying(isPlaying ? null : index)}
                  aria-label={`${isPlaying ? 'Pause' : 'Play'} ${track.title}`}
                  aria-pressed={isPlaying}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand text-brand transition hover:bg-brand hover:text-white"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-[22px] font-bold text-ink">{track.title}</h4>
                  <div className="mt-3 h-1 w-full bg-[#e1e1e1]">
                    <div className={cn('h-full bg-brand', isPlaying ? 'w-2/3' : 'w-1/3')} />
                  </div>
                </div>
                <span className="text-sm text-muted">0:00</span>
                <span className="text-sm text-muted-light">{track.duration}</span>
                <Volume2 className="h-5 w-5 shrink-0 text-muted" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
