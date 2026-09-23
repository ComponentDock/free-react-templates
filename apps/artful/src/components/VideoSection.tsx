import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      className="relative bg-cover bg-center py-24 text-white"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/artful-video/1920/800)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        {/* Video thumbnail */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/artful-videothumb/600/400"
            alt="Video showcase thumbnail"
            className="rounded-lg"
          />
          <button
            className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-artful-red text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play size={24} fill="white" />
          </button>
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold">Video Showcase</h2>
          <p className="mb-4 text-base font-light leading-relaxed text-white/80">
            Watch our creative process in action. From initial concept sketches to the final
            masterpiece, see how our team brings artistic visions to life.
          </p>
          <p className="text-base font-light leading-relaxed text-white/80">
            Our studio combines traditional techniques with modern technology to create exceptional
            art that resonates with audiences worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}
