import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Video thumbnail */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/perk-video/600/400"
                alt="Coffee making video"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white"
                  aria-label="Play video"
                >
                  <Play size={24} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
              Live Coffee making process.
            </p>
            <h2 className="mb-6 text-3xl font-semibold text-ink md:text-4xl">
              We Telecast our
              <br />
              Coffee Making Live
            </h2>
            <p className="mb-4 font-medium text-ink">
              We are here to listen from you deliver excellence
            </p>
            <p className="mb-6 leading-relaxed text-mist">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
