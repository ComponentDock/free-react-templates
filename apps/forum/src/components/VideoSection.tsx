import { Play } from 'lucide-react'

export interface VideoSectionProps {
  className?: string
}

export function VideoSection({ className }: VideoSectionProps) {
  return (
    <section className={`bg-white py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Text area */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8ab92d]">
            Brand new app to blow your mind
          </p>
          <h2 className="mb-4 text-3xl font-bold text-[#222] md:text-4xl">
            Conference Highlights and Recaps
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[#777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-[#222] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#8ab92d]"
          >
            Get Started now
          </a>
        </div>

        {/* Video area */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/forum-video-section/600/400"
            alt="Conference highlights"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/50"
            aria-label="Play video"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8ab92d] text-white">
              <Play size={24} fill="currentColor" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
