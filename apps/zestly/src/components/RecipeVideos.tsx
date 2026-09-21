import { Play } from 'lucide-react'

export function RecipeVideos() {
  return (
    <section id="videos" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: Text */}
          <div>
            <h2 className="font-body text-3xl font-bold leading-tight text-body">
              Recipe videos that never misses any portion
            </h2>
            <p className="mt-4 font-body leading-relaxed text-secondary">
              Discover step-by-step cooking videos that guide you through every detail, from
              ingredient prep to the final plating. Our video library covers cuisines from around
              the world.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Watch Video"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-light to-blue-lighter text-white shadow-lg transition-opacity hover:opacity-90"
              >
                <Play className="ml-1 h-6 w-6" />
              </button>
              <div>
                <h4 className="font-body text-lg font-bold text-body">Watch Video</h4>
                <p className="font-body text-sm text-secondary">You will love our execution</p>
              </div>
            </div>
          </div>

          {/* Right: Thumbnails */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/zestly-video-main/600/400"
              alt="Recipe video thumbnail"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/zestly-video-sm1/200/150"
              alt="Recipe video thumbnail small"
              className="absolute -bottom-4 -left-4 rounded shadow-md"
            />
            <img
              src="https://picsum.photos/seed/zestly-video-sm2/200/150"
              alt="Recipe video thumbnail small 2"
              className="absolute -right-4 -top-4 rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
