import { Video, Headphones, Download, BookOpen } from 'lucide-react'

const MEDIA_BUTTONS = [
  { icon: Video, label: 'Watch video' },
  { icon: Headphones, label: 'Listen audio' },
  { icon: Download, label: 'Download' },
  { icon: BookOpen, label: 'Read transcript' },
]

export function LatestSermon() {
  return (
    <section className="relative z-20 -mt-8" aria-label="Latest sermon">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded bg-brand px-6 py-6 text-white shadow-lg sm:flex-row sm:px-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-sm font-medium text-white/80">Latest Sermon:</span>
            <span className="font-heading text-lg font-medium">Rebuilding The Walls</span>
            <span className="hidden text-white/60 sm:inline">|</span>
            <span className="text-sm text-white/60">
              Posted on June 28, 2018, Pastor John Smith
            </span>
          </div>
          <div className="flex items-center gap-2">
            {MEDIA_BUTTONS.map((btn) => (
              <a
                key={btn.label}
                href="#"
                aria-label={btn.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <btn.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
