import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 bg-primary-900/30" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative md:w-5/12">
            <img
              src="https://picsum.photos/seed/crafty-video/600/400"
              alt="Crafting video thumbnail"
              className="h-64 w-full rounded object-cover"
              loading="lazy"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-400 text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play className="ml-1 h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col justify-center md:w-7/12">
            <h3 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              From the root <br className="hidden sm:block" />
              of experience We dig <br className="hidden sm:block" />
              out the best talent
            </h3>
            <p className="mt-6 text-gray-300">
              Our creative process combines time-honored techniques with cutting-edge technology.
              Watch how we bring ideas to life through meticulous craftsmanship and artistic
              dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
