import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Watch Video</h2>
        </div>
        <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://picsum.photos/seed/soulflow-video/1200/600"
            alt="Yoga video thumbnail"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              className="w-20 h-20 bg-soulflow-teal/90 rounded-full flex items-center justify-center hover:bg-soulflow-teal transition-colors"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
