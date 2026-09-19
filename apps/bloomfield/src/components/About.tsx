import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-[4px] text-bloom-400">
              About us
            </span>
            <h2
              className="text-3xl font-normal leading-snug text-gray-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We provide all kinds of fresh flower services
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-base leading-relaxed text-gray-500">
              For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers
              that can be dried and incorporated into late fall and winter floral arrangements has
              been a game-changer. During her growing season, this farmer-florist relies on a vivid
              palette of annuals, perennials and ornamental grasses to supply her studio.
            </p>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Video placeholder */}
          <div className="group relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/bloomfield-about/800/500"
              alt="Flower arrangement"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
              <a
                href="#"
                aria-label="Play video"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-bloom-400 text-white shadow-lg transition-transform hover:scale-110"
              >
                <Play className="ml-1 h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-[4px] text-bloom-400">
              Slow Flowers' Floral Insights
            </span>
            <h2
              className="mb-4 text-3xl font-normal leading-snug text-gray-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Dried flowers are having a renaissance
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-500">
              This awareness has been stimulated by sustainable sourcing practices and the desire on
              the part of North American flower growers to "extend the season" beyond the last
              frost.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full bg-bloom-400 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-bloom-500"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
