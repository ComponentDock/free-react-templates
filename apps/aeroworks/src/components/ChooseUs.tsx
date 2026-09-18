import { Play } from 'lucide-react'

export function ChooseUs() {
  return (
    <section className="bg-section-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-text-dark">Why People Choose Us</h2>
            <p className="mb-8 leading-relaxed text-text-medium">
              We stand out with our commitment to quality, transparency, and customer satisfaction.
              Our extensive inventory, competitive pricing, and dedicated team make us the trusted
              choice for car buyers and renters alike.
            </p>
            <a
              href="#"
              className="inline-block rounded-[2px] bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              About Us
            </a>
          </div>

          {/* Right — video placeholder */}
          <div className="relative h-72 overflow-hidden rounded-[2px] lg:h-96">
            <img
              src="https://picsum.photos/seed/aeroworks-video/800/500"
              alt="Video thumbnail"
              className="h-full w-full object-cover"
            />
            <button
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white transition-transform hover:scale-110">
                <Play size={28} fill="currentColor" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
