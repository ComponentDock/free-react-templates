import { Play, Film, Sparkles, Monitor, Zap } from 'lucide-react'

const timeline = [
  { year: '2015', text: 'Launched our video production division.' },
  { year: '2018', text: 'Expanded into motion graphics and animation.' },
  { year: '2020', text: 'Pioneered 360° immersive video experiences.' },
  { year: '2023', text: 'AI-powered video editing and post-production.' },
]

const carouselItems = [
  { icon: Film, label: 'Video Editing' },
  { icon: Sparkles, label: 'Premium Clear' },
  { icon: Monitor, label: 'For All Displays' },
  { icon: Zap, label: 'Fast Delivery' },
]

export function Offer() {
  return (
    <section id="offer" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[370px_1fr]">
          {/* Title block */}
          <div className="flex h-[370px] w-[370px] flex-col items-center justify-center bg-green-title">
            <span
              className="text-6xl font-bold text-green-num"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              05
            </span>
            <span
              className="mt-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Offer
            </span>
          </div>

          <div className="space-y-10">
            <p
              className="max-w-lg text-gray-text leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We offer comprehensive creative solutions from concept to delivery. Our video
              production and motion graphics team brings your vision to life with stunning visual
              storytelling.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-4">
                  <span
                    className="min-w-[80px] text-2xl font-bold text-yellow-timeline"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.year}
                  </span>
                  <p className="text-gray-text" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Video thumbnail */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/pc-video/800/450"
                alt="Video showcase"
                className="h-auto w-full object-cover"
              />
              <button
                type="button"
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-brand text-white transition-colors hover:bg-pink-hover"
              >
                <Play className="h-6 w-6" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>

        {/* Icon carousel */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {carouselItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                <item.icon className="h-8 w-8 text-navy" />
              </div>
              <span
                className="text-sm font-bold text-navy-body"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
