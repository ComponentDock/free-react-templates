import { Play } from 'lucide-react'

export function VideoCta() {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/washbox-video/1920/800')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#010A44]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Play button */}
          <div className="shrink-0">
            <button
              type="button"
              aria-label="Play video"
              className="w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #70D76A, #4CAF50)',
              }}
            >
              <Play size={32} className="text-white ml-1" fill="white" />
            </button>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[Work_Sans] mb-4 text-white">
              Your car will look as your new one
            </h2>
            <p className="text-white/70 max-w-lg">
              Watch how our professional team transforms your vehicle with state-of-the-art
              equipment and premium products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
