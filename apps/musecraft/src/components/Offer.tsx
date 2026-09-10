import { Play } from 'lucide-react'

const features = [
  'Video Editing',
  'Premium Clear',
  'For All Displays',
  'Right On Time',
  'Innovative Ideas',
  'Perfect Sound',
  '3D Solution',
]

export function Offer() {
  return (
    <section id="video" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-start gap-6">
          <span className="font-heading text-8xl font-bold text-amber/30">05</span>
          <div className="rounded-lg bg-amber px-6 py-4">
            <h2 className="font-heading text-4xl font-bold text-white">Offer</h2>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Video feature */}
          <div>
            <div className="relative overflow-hidden rounded-lg bg-navy-light">
              <img
                src="https://picsum.photos/seed/musecraft-video/600/400"
                alt="Video showcase"
                className="h-72 w-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                  aria-label="Play video"
                >
                  <Play className="h-8 w-8 fill-current" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-white/60">Video</p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feat) => (
              <div key={feat} className="rounded-lg bg-navy-light p-6 text-center">
                <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
