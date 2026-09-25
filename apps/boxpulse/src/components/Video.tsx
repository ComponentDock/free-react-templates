import { Video, Headphones, Monitor, Clock, Lightbulb, Music, Box } from 'lucide-react'

const features = [
  { icon: Video, title: 'Video Editing' },
  { icon: Headphones, title: 'Premium Quality' },
  { icon: Monitor, title: 'For All Displays' },
  { icon: Clock, title: 'Right On Time' },
  { icon: Lightbulb, title: 'Innovative Ideas' },
  { icon: Music, title: 'Perfect Sound' },
]

export function VideoSection() {
  return (
    <section id="video" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="shrink-0 md:w-1/4">
            <span className="block font-heading text-8xl font-bold text-brand-dark/10 md:text-[120px]">
              05
            </span>
            <h2 className="mt-2 -translate-y-4 font-heading text-2xl font-bold uppercase tracking-wider text-text-primary">
              Offer
            </h2>
          </div>
          <div className="flex-1">
            <div className="relative mb-12 flex aspect-video items-center justify-center overflow-hidden rounded bg-brand-dark">
              <Box className="h-16 w-16 text-white/30" />
              <span className="absolute bottom-4 right-4 font-heading text-xs uppercase tracking-wider text-white/50">
                Video Showcase
              </span>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink/10">
                      <Icon className="h-6 w-6 text-brand-pink" />
                    </div>
                    <span className="font-heading text-xs font-medium uppercase tracking-wider text-text-primary">
                      {feature.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
