import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="bg-mist">
      <div className="grid items-center md:grid-cols-2">
        <div className="order-2 px-8 py-16 md:order-1 md:px-16 md:py-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-primary-400">
            Tutorial for beginner
          </p>
          <h2 className="mb-6 text-3xl font-semibold leading-snug text-ink">
            Watch tutorial
            <br />
            video of Nimbus to start
          </h2>
          <p className="mb-4 font-medium text-ink">
            We are here to listen from you deliver excellence
          </p>
          <p className="leading-relaxed text-smoke">
            Get started with our comprehensive video tutorials that walk you through every feature.
            From setup to advanced workflows, learn at your own pace with step-by-step guides.
          </p>
        </div>
        <div
          className="relative order-1 min-h-[300px] bg-cover bg-center md:order-2 md:min-h-[500px]"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/nimbus-video/800/600)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex h-full items-center justify-center">
            <button
              aria-label="Play video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
            >
              <Play className="ml-1 h-8 w-8" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
