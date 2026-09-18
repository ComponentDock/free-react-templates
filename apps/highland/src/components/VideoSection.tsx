import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section data-testid="video-section" className="relative py-32">
      <img
        src="https://picsum.photos/seed/highland-video/1920/800"
        alt="Scenic view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-overlay" />

      <div className="relative z-10 text-center text-white">
        <span className="text-sm font-normal uppercase tracking-widest opacity-90">
          Highland Sea View
        </span>
        <h2 className="text-4xl lg:text-5xl font-normal mt-3 mb-8">
          Relax and Enjoy your Vacation
        </h2>
        <button
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto hover:bg-gray-100 transition-colors"
          aria-label="Play video"
        >
          <Play className="text-brand" size={24} fill="currentColor" />
        </button>
      </div>
    </section>
  )
}
