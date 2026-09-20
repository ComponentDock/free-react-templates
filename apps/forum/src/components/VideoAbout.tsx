import { Play } from 'lucide-react'

export interface VideoAboutProps {
  className?: string
}

export function VideoAbout({ className }: VideoAboutProps) {
  return (
    <section id="videos" className={`bg-[#f9f9ff] py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Video area */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/forum-video-about/600/400"
            alt="Coffee making tutorial"
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

        {/* Text area */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8ab92d]">
            Tutorial for beginner
          </p>
          <h2 className="mb-4 text-3xl font-bold text-[#222] md:text-4xl">
            We Telecast our Coffee Making Live
          </h2>
          <p className="mb-3 text-sm font-medium text-[#222]">
            Watch our live coffee making session and learn the art of brewing the perfect cup.
          </p>
          <p className="text-sm leading-relaxed text-[#777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  )
}
