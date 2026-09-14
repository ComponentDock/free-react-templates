import { Play } from 'lucide-react'

export function VideoCta() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video thumbnail */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://picsum.photos/seed/panorama-video/700/450"
              alt="Agency showreel"
              className="w-full object-cover"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ocean-400 shadow-lg transition-transform hover:scale-110"
            >
              <Play className="h-6 w-6 ml-1" />
            </button>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean-400">
              Watch the video
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">We Are Web Agency</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We craft compelling digital experiences that elevate your brand. Our team combines
              strategy, creativity, and technology to deliver results that matter.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              From initial concept through launch and beyond, we partner with you to build products
              your users will love. Every pixel, every interaction, every line of code — crafted
              with care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
